import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import HomeBt from "./HomeBt";
import { useNavigation } from "@react-navigation/native";

const ListCars = () => {
  const navigate = useNavigation();
  const [productCardData, setProductCardData] = React.useState([
    // Add your product card data here (image URLs, titles, prices, etc.)
    {
      id: 1,
      imageUrl: require("./images/pngegg (8).png"),
      title: "تويوتا يارس",
      model: "2023",
      deal: "قسط شهري",
      month: "36",
      price: "1200",
    },
    {
      id: 2,
      imageUrl: require("./images/Kia_Cerato_Exterior_01.png"),
      title: "كيا سيراتو",
      model: "2020",
      deal: "قسط شهري",
      month: "28",
      price: "1500",
    },
    {
      id: 4,
      imageUrl: require("./images/تنزيل (68).png"),
      title: "هونداي النترا",
      model: "2022",
      deal: "قسط شهري",
      month: "13",
      price: "1400",
    },
    {
      id: 6,
      imageUrl: require("./images/palisafe-lx2-pe-default-image-pc.png"),
      title: "هونداي كونا",
      model: "2024",
      deal: "قسط شهري",
      month: "12",
      price: "2000",
    },
    // ... more product cards
  ]);

  return (
    <View>
      <View className='relative w-full mx-3 h-6 '>
        <Text className='absolute right-7 top-1 font-bold text-texttt'>
          احدث السيارات
        </Text>
        <Text className='left-0 absolute top-1 font-bold text-primary'>
          المزيد
        </Text>
      </View>
      <View className='flex flex-wrap flex-row'>
        {productCardData.map((product) => (
          <Pressable
            onPress={() => {
              navigate.navigate("deatals", {
                carId: product.id,
              });
            }}
            key={product.id}
            className=' w-1/2'>
            <View className=' bg-white my-2  mx-2 rounded-lg pt-5'>
              <Image
                source={product.imageUrl}
                className='object-cover w-full'
              />
              <View className='p-3 rounded-lg py-3'>
                <View className='flex-row-reverse'>
                  <Text className='font-bold text-texttt flex justify-center items-center'>
                    {product.title}
                  </Text>
                  <Text className='border-x-[1px] border-texttt  px-1 text-[10px] mx-1 flex justify-center items-center'>
                    <Text className='font-thin text-[6px]'>مودل</Text>
                    {product.model}
                  </Text>
                  <View className='flex-row m-0 flex-nowrap'>
                    <View className=' flex flex-col mx-[2px]'>
                      <Text className='text-[6px]'>فقط</Text>
                      <Text className='text-[6px]'>اشهر</Text>
                    </View>
                    <Text>{product.month}</Text>
                  </View>
                </View>
                <View className='text-center my-2'>
                  <Text className='m-auto text-primary'>{product.price}</Text>
                  <Text className='m-auto text-primary'>{product.deal}</Text>
                </View>
                <HomeBt
                  title='حجز الان'
                  onPress={() => navigate.navigate("booking")}
                />
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ListCars;
