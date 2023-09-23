import React from 'react';
import {View, StyleSheet} from 'react-native';
import Login from './src/components/Login';

function App(): JSX.Element {
  console.log('start');
  return (
    <View style={sty.container}>
      <Login />
    </View>
  );
}
const sty = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
  view2: {backgroundColor: 'green', flex: 1},
  view3: {backgroundColor: 'yellow', flex: 1},
  zindex: {position: 'absolute', right: 0},
});
export default App;
