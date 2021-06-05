import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Add from '../views/Add';
import Home from '../views/Home';

const Stack = createStackNavigator();
const TodoStack = createStackNavigator();

// public stack
function TodoRoutes() {
  return (
    <TodoStack.Navigator headerMode="none">
      <TodoStack.Screen key={'Home'} name={'Home'} component={Home} />
      <TodoStack.Screen key={'Add'} name={'Add'} component={Add} />
    </TodoStack.Navigator>
  );
}

// base stack
function PrimaryContainer() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        key={`TodoRoutes`}
        name={`TodoRoutes`}
        component={TodoRoutes}
      />
    </Stack.Navigator>
  );
}

export default PrimaryContainer;
