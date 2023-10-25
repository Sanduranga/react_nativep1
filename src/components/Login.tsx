/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {RootState} from '../redux/store';
import {useSelector} from 'react-redux';

const Login = (props: any) => {
  const stack = props.navigation;
  let password: string;
  let email: string;
  const logingEmail = useSelector(
    (state: RootState) => state.logData.userEmail,
  );
  const logingPassword = useSelector(
    (state: RootState) => state.logData.password,
  );

  const enteredEmail = (e: string) => {
    email = e;
  };
  const enteredPassword = (e: string) => {
    password = e;
  };

  const handlePressLogin = () => {
    if (logingEmail === email && logingPassword === password) {
      stack.navigate('Home');
    } else {
      Alert.alert('Check your email or password');
    }
  };

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
          onChangeText={enteredEmail}
        />
      </View>
      <View style={sty.formInput}>
        <TextInput
          style={sty.textInput}
          placeholder="Password"
          placeholderTextColor={'white'}
          secureTextEntry={true}
          onChangeText={enteredPassword}
        />
      </View>
      <TouchableOpacity style={sty.loginButton} onPress={handlePressLogin}>
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
        }}
        onPress={() => stack.navigate('Signup')}>
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
