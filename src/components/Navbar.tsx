/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Navbar = (props: any) => {
  const stack = props.stack;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#414c6e',
      }}>
      <StatusBar backgroundColor="#414c6e" barStyle="light-content" />
      <TouchableOpacity style={{}} onPress={() => stack.navigate('Home')}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 25}}>
          SragTeQ
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => stack.navigate('Cart')}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>
          Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Navbar;
