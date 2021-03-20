import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/Home";
import IntroduceEmail from "./src/IntroduceEmail";

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="IntroduceEmail" component={IntroduceEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}