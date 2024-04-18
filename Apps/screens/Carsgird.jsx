import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import Toyota, {
  Honda,
  Hyundai,
  Kia,
  Lexus,
  Mg,
  Mitsubishi,
  Nissan,
} from "../components/HomeCom/Logos/Cars";

import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

const Carsgird = () => {
  const ScrollCard = ({ item, onPress }) => (
    <View key={item.id || index} className='m-4'>
      <View>
        <TouchableOpacity
          className='p-6 bg-primary mx-2 rounded-2xl flex items-center justify-center'
          onPress={onPress}>
          {item.imageUrl}
        </TouchableOpacity>
        <Text className='text-center mt-2 text-texttt text-2xl'>
          {item.title}
        </Text>
      </View>
    </View>
  );
  const navv = useNavigation();
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
    <ScrollView className='h-full w-full'>
      <View className='grid justify-items-center'>
        {scrollCardData.map((item, index) => (
          <ScrollCard
            key={item.id || index}
            item={item}
            onPress={() => navv.navigate("cars")}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Carsgird;
