/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Navigation from './src/components/Navigation';
import store from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </Provider>
  );
}

export default App;
