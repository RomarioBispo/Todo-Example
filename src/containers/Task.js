import React from 'react';
import {
    View,
    Button,
    Picker
} from 'react-native';

import {connect} from 'react-redux';
import {modificaTitulo, modificaDescricao, modificaDone, clearAll} from '../actions/TodoActions';
import { Input } from 'react-native-elements';

import instance from '../config/Axios';

const Task = props => {

    function newTask(name, descricao) {
        if (props.id == '') {
            instance.post('', {
                name: name,
                description: descricao,
                made: props.made
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        } else {
            instance.put('https://amqpgz2wi7.execute-api.us-east-1.amazonaws.com/dev/'+props.id, {
                name: name,
                description: descricao,
                made: props.made
              })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
        }
        props.navigation.navigate('Home');
        props.clearAll();
    }

    return(
        <View style={{flex:1, justifyContent:'space-around'}}>
            <Input
                placeholder='Title'
                onChangeText={text => props.modificaTitulo(text)}
                value={props.titulo}
            />
            <Input
                placeholder='Description'
                onChangeText={text => props.modificaDescricao(text)}
                value={props.descricao}
            />
            <Picker
                selectedValue={props.made}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>{props.modificaDone(itemValue);}
                }>
                <Picker.Item label="Em andamento" value="0" />
                <Picker.Item label="Finalizado" value="1" />
            </Picker>

            <Button
                title="Save"
                onPress={() => {newTask(props.titulo, props.descricao);}}
            />
        </View>
    );
}

const mapStateToProps = state => (
    {
        titulo: state.TodoReducer.titulo,
        descricao:state.TodoReducer.descricao,
        done:state.TodoReducer.done,
        made:state.TodoReducer.made,
        id:state.TodoReducer.id,
        
        
    }   
)
export default connect(mapStateToProps, {modificaTitulo, modificaDescricao, modificaDone, clearAll})(Task);