import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Add from '../views/Add';
import Home from '../views/Home';

const Stack = createStackNavigator();

const PrimaryContainer = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        key={`home`}
        name={`home`}
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        key={`add`}
        name={`add`}
        component={Add}
        options={{
          title: 'Add',
          headerShown: true,
          headerBackTitle: 'back',
        }}
      />
    </Stack.Navigator>
  );
};

export default PrimaryContainer;
