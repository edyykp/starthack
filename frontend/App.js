import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider, createStore} from 'react-redux';
import Home from "./src/Home";
import {IntroduceEmail} from "./src/IntroduceEmail";
import {Waiting} from "./src/Waiting";
import CameraScan from './src/CameraScan';
import store from './store';

const Stack = createStackNavigator();

export default class App extends React.Component {
 render() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="IntroduceEmail" component={IntroduceEmail} />
          <Stack.Screen name="Waiting" component={Waiting}/>
          <Stack.Screen name="CameraScan" component={CameraScan}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
 }
  
}