import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { ColourPalette } from '../assets/styles/ColoursStyles';
import Add from '../views/Add';
import Home from '../views/Home';

const Stack = createStackNavigator();
const TodoStack = createStackNavigator();

// public stack
function TodoRoutes() {
  return (
    <TodoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ColourPalette.primary,
        },
        headerTintColor: ColourPalette.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <TodoStack.Screen
        key={'Home'}
        name={'Home'}
        component={Home}
        options={{
          title: 'My Todo',
          headerShown: true,
        }}
      />
      <TodoStack.Screen
        key={'Add'}
        name={'Add'}
        component={Add}
        options={{
          title: 'Add Todo',
          headerShown: true,
        }}
      />
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
