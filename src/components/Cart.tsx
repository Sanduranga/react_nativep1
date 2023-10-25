/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {FlatList} from 'react-native-gesture-handler';
import Navbar from './Navbar';

const Cart = (props: any) => {
  const stack = props.navigation;
  const cartItems = useSelector((state: RootState) => state.fetchItems.cart);

  interface cartArrayItems {
    price: number;
    image: any;
    id: string;
  }

  const mappingCartItems = ({item}: {item: cartArrayItems}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      <Image source={{uri: item.image}} alt="buyItems" width={50} height={50} />
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Navbar stack={stack} />
      </View>
      <View style={{flex: 7}}>
        <FlatList
          data={cartItems}
          numColumns={1}
          renderItem={mappingCartItems}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Cart;
