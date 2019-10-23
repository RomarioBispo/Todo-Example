import React from 'react';

import { Provider } from 'react-redux';
import { store } from './src/store/';

import {Home, Task} from './src/containers';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: {
    screen: Home,
      navigationOptions: {
        header: null,
      }
  },
  Task: {
    screen: Task,
  },
});

const AppContainer = createAppContainer(StackNavigator);

const App = () => {
  return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
  );
};

export default App;
