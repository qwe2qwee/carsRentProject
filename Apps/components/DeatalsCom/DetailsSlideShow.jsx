import React, { useState } from "react";
import { Text, View, FlatList, Image , useWindowDimensions} from "react-native";
import Onboarding from "./Onboarding";

const DetailsSlideShow = ({ images }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlideIndex(index);
  };


  const nameThe = {
    id: 2,
    imageUrl: require("./images/Kia_Cerato_Exterior_01.png"),
    title: "كيا سيراتو",
    model: "2020",
    deal: "قسط شهري",
    month: "28",
    price: "1500",
  };

  const im = [
    {
      url: require("./images/big-up_cf3464582d9a4517f27a24dfa946a6c2.png"),
    },
    {
      url: require("./images/2.png"),
    },
    {
      url: require("./images/3.png"),
    },
    {
      url: require("./images/4.png"),
    },
  ];


  return (
    <View className=''>
      <View className='h-72 w-full'>
        <View className='h-72 w-full bg-black '>
          <FlatList
            data={im}
            horizontal
            showsHorizontalScrollIndicator={true} // إظهار مؤشر التمرير
            pagingEnabled={true} // تمكين التصفّح لتحسين التمرير وعرض صورة واحدة فقط على الشاشة
            renderItem={({ item }) => <Onboarding Url={item.url} />}
            bounces={false}
          />
        </View>
      </View>
      <View className='relative mb-20'>
        <View className='h-20 border-b-[1px] border-b-texttt bg-bg_main rounded-t-3xl absolute top-[-1px] z-40 w-full'>
          <View className='flex flex-row-reverse items-center  mx-3'>
            <View>
              <Text className='text-primary text-2xl p-4'>{nameThe.title}</Text>
            </View>
            <View className=' border-x-[1px] border-x-texttt relative '>
              <Text className='p-4  text-2xl'>
                <Text className='text-[9px]  absolute bottom-5 mr-4'>مودل</Text>
                {nameThe.model}
              </Text>
            </View>
            <View className='flex flex-row'>
              <View className=''>
                <Text className=''>عقد</Text>
                <Text>اشهر</Text>
              </View>
              <Text className='p-4  text-2xl'>{nameThe.month}</Text>
            </View>
          </View>
          <View className='h-3'>
            <Text>sss</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsSlideShow;
