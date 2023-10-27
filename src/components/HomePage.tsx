/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  FlatList,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {buyThis, fetchData} from '../redux/slices/itemsSlice';
import {RootState} from '../redux/store';
import Navbar from './Navbar';

const Homepage = (props: any) => {
  const stack = props.navigation;
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
    <View style={{backgroundColor: '#8f98b3', padding: 10, margin: 5}}>
      <Image
        style={{width: 'auto', aspectRatio: 1, resizeMode: 'cover'}}
        source={{uri: item.download_url}}
      />
      <View>
        <Text>{item.author}</Text>
        <Text>
          LKR.
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
            {item.width}
          </Text>
        </Text>
        <Text>+Shipping LKR.{item.height}</Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          unshiftItemsToCart(item.width, item.download_url, item.id)
        }>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 15,
            marginTop: 10,
            padding: 5,
            backgroundColor: '#bdbd19',
            width: 'auto',
            textAlign: 'center',
            borderRadius: 50,
          }}>
          Buy
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Navbar stack={stack} />
      </View>
      <View style={{flex: 7}}>
        <FlatList
          data={items}
          numColumns={2}
          renderItem={mappingHomeItem}
          keyExtractor={item => item.id}
          style={{backgroundColor: 'white'}}
        />
      </View>
    </View>
  );
};

export default Homepage;
