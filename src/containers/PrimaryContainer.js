import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../views/Home/Home';

const Stack = createStackNavigator();

const PrimaryContainer = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        key={`home_screen`}
        name={`home_screen`}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default PrimaryContainer;
