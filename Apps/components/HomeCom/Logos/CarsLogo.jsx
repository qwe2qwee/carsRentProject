import React from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Toyota, {
  Honda,
  Hyundai,
  Kia,
  Lexus,
  Mg,
  Mitsubishi,
  Nissan,
} from "./Cars";

import { useNavigation } from "@react-navigation/native";


const CarsLogo = () => {
  const navv = useNavigation()
  const [scrollCardData, setScrollCardData] = React.useState([
    // Add your scroll card data here (image URLs, titles, etc.)

    {
      id: 1,
      imageUrl: <Honda />,
      title: "هوندا",
    },
    {
      id: 2,
      imageUrl: <Toyota />,
      title: "تويوتا",
    },
    {
      id: 3,
      imageUrl: <Mitsubishi />,
      title: "ميتسوبيشي",
    },
    {
      id: 4,
      imageUrl: <Mg />,
      title: "ام جي",
    },
    {
      id: 5,
      imageUrl: <Nissan />,
      title: "نيسان",
    },
    {
      id: 6,
      imageUrl: <Hyundai />,
      title: "هونداي",
    },
    {
      id: 7,
      imageUrl: <Kia />,
      title: "كيا",
    },
    {
      id: 8,
      imageUrl: <Lexus />,
      title: "ليكزيز",
    },

    // ... more scroll cards
  ]);
  return (
    <View className=' pb-1 pt-9 bg-white '>
      <View className='h-44  relative pt-11'>
        <Pressable
          onPress={() => {
            console.log("click");
            // navv.navigate('otp')
          }}
          className='right-3 top-1 absolute'>
          <Text className=' text-texttt font-bold'>العلامات التجارية</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            console.log("click")
            
          }}
          className='left-3 top-1 absolute'>
          <Text className=' text-primary font-bold'>المزيد</Text>
        </Pressable>

        <FlatList // Use FlatList for horizontal scroll cards
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={scrollCardData}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity className='p-4 bg-primary mx-2 rounded-2xl flex items-center justify-center'>
                {item.imageUrl}
              </TouchableOpacity>
              <Text className='text-center mt-2 text-texttt'>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default CarsLogo;
