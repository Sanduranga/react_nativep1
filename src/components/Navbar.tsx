/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
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
        backgroundColor: 'green',
      }}>
      <TouchableOpacity style={{}} onPress={() => stack.navigate('Home')}>
        <Text>SragThiQ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => stack.navigate('Cart')}>
        <Text>Cart</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Navbar;
