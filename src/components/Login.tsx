/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Login = () => {
  return (
    <View style={sty.container}>
      <Image
        style={{position: 'absolute'}}
        source={require('../images/bgImage.jpg')}
        resizeMode="cover"
      />

      <Text style={sty.welcome}>WELCOME</Text>
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
          placeholder="Password"
          placeholderTextColor={'white'}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={sty.loginButton}>
        <Text style={sty.loginText}>Log in</Text>
      </TouchableOpacity>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          alignSelf: 'flex-end',
          marginRight: 20,
          fontSize: 16,
        }}>
        Forgotten password?
      </Text>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 25,
          marginTop: 50,
        }}>
        Sign Up
      </Text>
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
    fontSize: 40,
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
export default Login;
