import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './HomePage';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
