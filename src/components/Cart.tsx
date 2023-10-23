import {View, Text, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {FlatList} from 'react-native-gesture-handler';

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.fetchItems.cart);

  interface cartArrayItems {
    price: number;
    image: string;
    id: string;
  }

  const mappingCartItems = ({item}: {item: cartArrayItems}) => (
    <View>
      <Image source={item.price} />
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={cartItems}
        numColumns={1}
        renderItem={mappingCartItems}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Cart;
