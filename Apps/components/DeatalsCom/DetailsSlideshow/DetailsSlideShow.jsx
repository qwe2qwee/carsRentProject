import React, { useState, useRef } from "react";
import {
  Text,
  View,
  FlatList,
  Animated,
} from "react-native";
import Onboarding from "./Onboarding";
import Paginator from "./Paginator";

const DetailsSlideShow = ({ dtat }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  const slides = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const nameThe = {
    id: 2,
    imageUrl: require("../images/Kia_Cerato_Exterior_01.png"),
    title: "كيا سيراتو",
    model: "2020",
    deal: "قسط شهري",
    month: "28",
    price: "1500",
  };

  const im = [
    {
      url: require("../images/big-up_cf3464582d9a4517f27a24dfa946a6c2.png"),
      id: 0,
    },
    {
      url: require("../images/2.png"),
      id: 1,
    },
    {
      url: require("../images/3.png"),
      id: 2,
    },
    {
      url: require("../images/4.png"),
      id: 3,
    },
  ];

  return (
    <View className=''>
      <View className='h-72 w-full relative m-auto centered-element'>
        <View className='h-72 w-full bg-black'>
          <FlatList
            data={im}
            horizontal
            showsHorizontalScrollIndicator={true} // إظهار مؤشر التمرير
            pagingEnabled={true} // تمكين التصفّح لتحسين التمرير وعرض صورة واحدة فقط على الشاشة
            renderItem={({ item }) => <Onboarding Url={item.url} />}
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: scrollX } } },
            ])}
            onViewableItemsChanged={viewableItemsChanged}
            scrollEventThrottle={32}
          />
        </View>
        <View className='absolute  bottom-[0] text-center w-full h-10 mx-auto flex items-center'>
          <Paginator data={im} scrollX={scrollX} />
        </View>
      </View>
      <View className='relative mb-16 '>
        <View className='h-20 border-b-[3px] border-b-[#EEEEEE] bg-secondary rounded-t-3xl absolute top-[-19px] z-40 w-full pt-2'>
          <View className='flex flex-row-reverse items-center  mx-3 h-14'>
            <View className='flex-basis-1/3 flex flex-col'>
              <Text className='text-primary text-2xl px-4'>{dtat.title}</Text>
              <View className='m-auto flex-row py-1'>
                <Text className='border-r-texttt border-r-[1px] px-3 '>
                  تمليك
                </Text>
                <Text className='px-3'>إيجار</Text>
              </View>
            </View>
            <View className=' border-x-[1px] border-x-texttt relative flex-basis-1/3 '>
              <Text className='px-4  text-2xl'>
                <Text className='text-[9px]  absolute bottom-5 mr-4'>مودل</Text>
                {dtat.model}
              </Text>
            </View>
            <View className='flex flex-row items-center justify-center w-fit max-w-full flex-basis-1/3 text-center mr-5'>
              <View className='m-auto pr-2'>
                <Text className='text-[10px] '>عقد</Text>
                <Text className='text-[10px]'>اشهر</Text>
              </View>
              <Text className='text-2xl '>{dtat.month}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsSlideShow;
