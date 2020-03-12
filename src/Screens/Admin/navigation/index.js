import React from 'react';
import TasksRoutes from './Tasks';
import UsersRoutes from './Users';
import { createDrawerNavigator } from '@react-navigation/drawer';

const AdminDrawer = createDrawerNavigator();

function AdminRoutes() {
  return (
    <AdminDrawer.Navigator initialRouteName='Tasks'>
      <AdminDrawer.Screen name='Tasks' component={TasksRoutes} />
      <AdminDrawer.Screen name='Users' component={UsersRoutes} />
    </AdminDrawer.Navigator>
  );
}

export default AdminRoutes;
