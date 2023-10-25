import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './HomePage';
import Cart from './Cart';
import Navbar from './Navbar';

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
        <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
