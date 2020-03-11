import React from 'react';
import Home from './Home';
import TaskDetails from './TaskDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function HomeAdminRoutes() {
  return (
    <Stack.Navigator
      headerMode='none'
      initialRouteName='Tasks'
    >
      <Stack.Screen name='Tasks' component={Home} />
      <Stack.Screen name='TaskDetails' component={TaskDetails} />
    </Stack.Navigator>
  );
}

export default function AdminRoutes() {
  return (
    <Drawer.Navigator initialRouteName='Admin'>
      <Drawer.Screen name='Tasks' component={HomeAdminRoutes} />
      <Drawer.Screen name='Users' component={Home} />
      {/* <Drawer.Screen name='TaskDetails' component={TaskDetails}/> */}
    </Drawer.Navigator>
  );
}
