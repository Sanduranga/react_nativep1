/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {FlatList} from 'react-native-gesture-handler';
import Navbar from './Navbar';
import {dropThis} from '../redux/slices/itemsSlice';

const Cart = (props: any) => {
  const stack = props.navigation;
  const cartItems = useSelector((state: RootState) => state.fetchItems.cart);
  const dispatch = useDispatch();

  interface cartArrayItems {
    price: number;
    image: any;
    id: string;
  }

  const shiftItemFromCart = (id: string) => {
    dispatch(dropThis(id));
  };

  const mappingCartItems = ({item}: {item: cartArrayItems}) => (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        borderBottomWidth: 2,
        padding: 3,
        width: 300,
      }}>
      <Image source={{uri: item.image}} alt="buyItems" width={50} height={50} />
      <Text>{item.price}</Text>
      <TouchableOpacity
        onPress={() => {
          shiftItemFromCart(item.id);
        }}>
        <Text
          style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: 18,
            borderColor: 'red',
            padding: 5,
          }}>
          X
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View
      style={{
        flex: 1,
      }}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Navbar stack={stack} />
      </View>
      <View
        style={{
          flex: 7,
          alignItems: 'center',
          marginTop: 25,
        }}>
        <FlatList
          data={cartItems}
          numColumns={1}
          renderItem={mappingCartItems}
          keyExtractor={item => item.id}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>
          Sub Total: LKR. 5589.00
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 19,
              paddingHorizontal: 6,
              paddingVertical: 7,
              backgroundColor: '#bdbd19',
              minWidth: 200,
              textAlign: 'center',
              borderRadius: 10,
            }}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
