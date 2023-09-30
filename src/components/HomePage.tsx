/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../redux/slices/itemsSlice';
import {RootState} from '../redux/store';

const Homepage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.fetchItems.items);
  // const [list, setList] = useState<any[]>([]);
  //   interface abc {
  //     id: string;
  //     author: string;
  //     width: number;
  //     height: number;
  //     url: string;
  //     download_url: string;
  //   }
  useEffect(() => {
    dispatch(fetchData() as any);
  });

  interface itemTypes {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  }

  const homeItemMap = () =>
    items.map((item: itemTypes) => (
      <View key={item.id}>
        <Image
          style={{width: '35%', height: '15%'}}
          source={{uri: item.download_url}}
          resizeMode="cover"
          className="md:h-[30vh] h-[20vh] w-full object-cover"
        />
        <View>
          <Text>Rs.{item.width}</Text>
        </View>
        <View>
          <Text>Discount Rs.{item.height}</Text>
        </View>
        {/* <View>
          <button
            // onClick={() => buyHomeItem(item.width, item.id, item.download_url)}
            className="text-center font-bold text-white bg-green-900 rounded-lg p-1 md:w-1/3 w-[25vw]">
            <Text> Buy Item</Text>
          </button>
        </View> */}
      </View>
    ));

  return (
    <View>
      <Text className="font-bold text-white text-lg">
        Homepage..................
      </Text>
      <View style={{}}>{homeItemMap()}</View>
    </View>
  );
};

export default Homepage;
