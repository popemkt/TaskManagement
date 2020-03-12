import React from 'react';
import Users from '../Users';
import UserDetails from '../Users/UserDetails';
import Button from '../../../Components/Button';
import { createStackNavigator } from '@react-navigation/stack';

const UsersStack = createStackNavigator();

function UsersRoutes({ navigation }) {
  return (
    <UsersStack.Navigator
      screenOptions={{
        headerTitle: 'Tasks',
        headerRight: () => (
          <Button
            onPress={() => navigation.popToTop()}
            title='Logout'
            color='#00cc00'
            icon={{ name: 'arrow-right' }}
            buttonStyle={{ marginRight: 10 }}
          />
        ),
        headerLeft: () => (
          <Button
            onPress={() => navigation.openDrawer()}
            title=''
            color='#00cc00'
            icon={{ name: 'hamburger' }}
            buttonStyle={{ marginLeft: 10 }}
          />
        ),
      }}
      initialRouteName='Users'
    >
      <UsersStack.Screen name='Users' component={Users} />
      <UsersStack.Screen name='UserDetails' component={UserDetails} />
    </UsersStack.Navigator>
  );
}

export default UsersRoutes;
