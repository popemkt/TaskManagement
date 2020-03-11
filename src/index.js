import React from 'react';
import Login from './Screens/Login';
import Admin from './Screens/Admin';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'orange',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        initialRouteName='Login'
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Admin' component={Admin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
