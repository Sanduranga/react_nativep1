/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/components/Navigation';

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Navigation />
    </View>
  );
}

export default App;
