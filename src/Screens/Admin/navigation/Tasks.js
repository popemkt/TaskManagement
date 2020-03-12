import React from 'react';
import Tasks from '../Tasks';
import TaskDetails from '../Tasks/TaskDetails';
import Button from '../../../Components/Button';
import { createStackNavigator } from '@react-navigation/stack';

const TasksStack = createStackNavigator();

function TasksRoutes({ navigation }) {
  return (
    <TasksStack.Navigator
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
      initialRouteName='Tasks'
    >
      <TasksStack.Screen name='Tasks' component={Tasks} />
      <TasksStack.Screen name='TaskDetails' component={TaskDetails} />
    </TasksStack.Navigator>
  );
}

export default TasksRoutes;