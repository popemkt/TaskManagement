import React from 'react';
import Login from './Screens/Login';
import Admin from './Screens/Admin';
import { Button, Alert, ShadowPropTypesIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='Admin'>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen
          name='Admin'
          component={Admin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
