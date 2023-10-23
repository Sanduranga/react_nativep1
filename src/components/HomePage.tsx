/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, FlatList, ImageSourcePropType} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {buyThis, fetchData} from '../redux/slices/itemsSlice';
import {RootState} from '../redux/store';
import Cart from './Cart';

const Homepage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.fetchItems.items);

  useEffect(() => {
    dispatch(fetchData() as any);
  });

  const unshiftItemsToCart = (price: number, image: string, id: string) => {
    dispatch(buyThis({price: price, image: image, id: id}));
  };

  interface arrayItems {
    id: string;
    author: string;
    width: number;
    height: number;
    url: ImageSourcePropType;
    download_url: string;
  }

  const mappingHomeItem = ({item}: {item: arrayItems}) => (
    <View style={{backgroundColor: 'gray', padding: 10, margin: 5}}>
      <Image
        style={{width: 'auto', aspectRatio: 1, resizeMode: 'cover'}}
        source={{uri: item.download_url}}
      />
      <View>
        <Text>Rs.{item.width}</Text>
      </View>
      <View>
        <Text>Discount Rs.{item.height}</Text>
      </View>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 15,
          marginTop: 10,
          padding: 5,
          backgroundColor: 'green',
          width: '50%',
          textAlign: 'center',
        }}
        onPress={() =>
          unshiftItemsToCart(item.width, item.download_url, item.id)
        }>
        Buy
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1, padding: 10}}>
      <Cart />
      <FlatList
        data={items}
        numColumns={2}
        renderItem={mappingHomeItem}
        keyExtractor={item => item.id}
        style={{}}
      />
    </View>
  );
};

export default Homepage;
