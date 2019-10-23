import React from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    Alert
} from 'react-native';

import {connect} from 'react-redux';
import { SearchBar } from 'react-native-elements';

import {modificaTitulo, modificaDescricao, modificaBusca, modificaLista, editaTodo, clearAll} from '../actions/TodoActions';
import instance from '../config/Axios';

import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

var list;

const Home = props => {

    function getAll() {
      instance.get('',)
    .then(function (response) {
      list = response.data.return.rows;
      props.modificaLista(list);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    return list;    
  }
  
  function getById(busca) {
      instance.get(busca, {
      })
    .then(function (response) {
      list = []
      list.push(response.data.return);
      props.modificaLista(list);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    return list;  
  }

  function editTask(id, name, descricao, made) {
    props.navigation.navigate('Task');
    props.editaTodo(id, name, descricao, made);
  }
  
  
function deleteTask(id) {

  Alert.alert(
    'Deletar Tarefa',
    'Deseja realmente deletar esta tarefa ?',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {  
        instance.delete('https://amqpgz2wi7.execute-api.us-east-1.amazonaws.com/dev/'+id, {
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          // always executed
        });}},
    ],
  );
  getAll();
}
    return (
        <View style={{flex:1}}>
            <View>
            <SearchBar
                platform="android"
                placeholder="Busca por id"
                onChangeText={search => {props.modificaBusca(search);}}
                value={props.busca} 
            />
            </View>
            <View style={{flex:4}}>
            <FlatList
              data={props.lista}
              renderItem={({ item }) =>
              <TouchableOpacity onPress={()=> editTask(item.idtask,item.name, item.description, item.made)} onLongPress={() => deleteTask(item.idtask)}>
              <Card containerStyle={{backgroundColor:'#00BFFF'}}>
                <Text style={{fontSize:25, fontWeight:'bold'}}>{item.name}</Text>
                <Text>{item.description}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Text>Id: {item.idtask}</Text>
                  <Text>{item.made == 0 ? "Em andamento": "finalizado"}</Text>
                </View>
              </Card>
              </TouchableOpacity> }
              keyExtractor={item => item.idtask}
            />
            </View>
            <View style={{flex:1, justifyContent:'space-around'}}>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <Button
                      title="Search By Id"
                      onPress={() => getById(props.busca)}
                  />
                  <Button
                      title="Search All"
                      onPress={() => getAll()}
                  />
                </View>
                <View>
                  <Button
                      title="New"
                      onPress={() =>{ props.navigation.navigate('Task'); props.clearAll();}}
                  />
                </View>
            </View>
        </View>

    );
}

const mapStateToProps = state => (
    {
        titulo: state.TodoReducer.titulo,
        descricao:state.TodoReducer.descricao,
        done:state.TodoReducer.done,
        busca:state.TodoReducer.busca,
        lista:state.TodoReducer.lista,
    }   
)
export default connect(mapStateToProps, {modificaTitulo, modificaDescricao, modificaBusca, modificaLista, editaTodo, clearAll})(Home);