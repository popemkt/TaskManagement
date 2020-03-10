import React, { useState, useEffect } from 'react';
import { Keyboard, StyleSheet, Text, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import Login from './Screens/Login'
import Admin from './Screens/Admin'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Admin' component={Admin}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

