/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';

const Signup = () => {
  return (
    <View style={sty.container}>
      <Image
        style={{position: 'absolute'}}
        source={require('../images/bgImage.jpg')}
        resizeMode="cover"
      />

      <Text style={sty.welcome}>Let's start</Text>
      <View style={sty.formInput}>
        <TextInput
          style={sty.textInput}
          placeholder="Your Email"
          placeholderTextColor={'white'}
        />
      </View>
      <View style={sty.formInput}>
        <TextInput
          style={sty.textInput}
          placeholder="Create a password"
          placeholderTextColor={'white'}
          secureTextEntry={true}
        />
      </View>
      <View style={sty.formInput}>
        <TextInput
          style={sty.textInput}
          placeholder="Confirm password"
          placeholderTextColor={'white'}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={sty.loginButton}>
        <Text style={sty.loginText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
const sty = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    marginBottom: 40,
  },
  formInput: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: '100%',
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    color: 'white',
  },
  loginButton: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  loginText: {
    padding: 12,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#2877ed',
    textAlign: 'center',
  },
});

export default Signup;
