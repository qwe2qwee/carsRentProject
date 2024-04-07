import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import HomeBt from "../HomeCom/HomeBt";
import { useState } from "react";

const CarsList = ({ grid }) => {
  const navigate = useNavigation();

  const [productCardData, setProductCardData] = useState([
    // Add your product card data here (image URLs, titles, prices, etc.)
    {
      id: 1,
      imageUrl: require("../HomeCom/images/palisafe-lx2-pe-default-image-pc.png"),
      title: "تويوتا يارس",
      model: "2023",
      deal: "قسط شهري",
      month: "36",
      price: "1200",
    },
    {
      id: 2,
      imageUrl: require("../HomeCom/images/pngegg (8).png"),
      title: "كيا سيراتو",
      model: "2020",
      deal: "قسط شهري",
      month: "28",
      price: "1500",
    },
    {
      id: 4,
      imageUrl: require("../HomeCom/images/تنزيل (68).png"),
      title: "هونداي النترا",
      model: "2022",
      deal: "قسط شهري",
      month: "13",
      price: "1400",
    },
    {
      id: 6,
      imageUrl: require("../HomeCom/images/palisafe-lx2-pe-default-image-pc.png"),
      title: "هونداي كونا",
      model: "2024",
      deal: "قسط شهري",
      month: "12",
      price: "2000",
    },
    {
      id: 7,
      imageUrl: require("../HomeCom/images/mobile_listing_main_2022_Changan_UNI-T_Exterior_01.png"),
      title: "هونداي كونا",
      model: "2020",
      deal: "قسط شهري",
      month: "24",
      price: "800",
    },
    {
      id: 8,
      imageUrl: require("../HomeCom/images/eado-2024-thumb.png"),
      title: "شانجان سيدان",
      model: "2021",
      deal: "قسط شهري",
      month: "15",
      price: "1000",
    },
    // ... more product cards
  ]);

  let card,
    countainer,
    title,
    visi,
    textCountainer,
    boderCoun,
    textVsButton,
    butt,
    modeel,
    model,
    imagCoun,
    imgg;

  if (grid) {
    visi = "hidden";
    card = "w-full";
    butt = "w-28 h-10";
    model = "ml-3 flex justify-center items-end";
    modeel = "ml-2 flex justify-center items-end";
    imagCoun = "h-36 w-full rounded-t-lg overflow-hidden ";
    title =
      "font-bold text-primary flex justify-center items-end mt-2  flex-1  text-xl";
    countainer = " bg-white mb-2  mx-2 my-3 rounded-lg pt-0 flex-1 h-56 flex ";
    textCountainer = "flex flex-col flex-nowrap items-end justify-start ";
    imgg = "hidden";
    boderCoun =
      "flex justify-center items-end ] text-texttt   px-1 text-[13px]  flex-row ";
    textVsButton =
      "p-3 rounded-lg py-3 flex flex-row-reverse justify-between  items-end h-20 ";
  } else {
    countainer = "bg-white my-3  mx-2 rounded-lg pt-5 ";
    title =
      "font-bold text-texttt flex justify-center items-end w-3/4 flex-1  text-[15px] ";
    textVsButton = "p-3 rounded-lg py-3";
    butt = "";
    modeel = "hidden";
    model = "mr-3";
    imagCoun = "hidden";
    imgg = "object-cover ";

    card = "w-1/2";
    textCountainer = "flex-row-reverse flex-nowrap";
    boderCoun =
      "flex justify-center items-end  w- border-r-[1px] text-texttt border-texttt  px-1 text-[13px] mx-1 ";
    visi = "text-center my-2";
  }

  return (
    <ScrollView>
      <View className='flex flex-wrap flex-row '>
        {productCardData.map((product) => (
          <Pressable
            onPress={() => {
              navigate.navigate("deatals", {
                carId: product.id,
              });
            }}
            key={product.id}
            className={card}>
            <View className={countainer}>
              {/* <ImageBackground source={} className='relative  h-32 w-full bg-black bg-cover object-cover'/> */}
              <Image source={product.imageUrl} className={imgg} />
              <View className={imagCoun}>
                <ImageBackground
                  source={product.imageUrl}
                  style={{
                    flex: 1,
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                  }}>
                  {/* Your other content here*/}
                </ImageBackground>
              </View>
              <View className={textVsButton}>
                <View className={textCountainer}>
                  <Text className={title}>{product.title}</Text>
                  <View className={boderCoun}>
                    <Text className={model}>{product.model}</Text>
                    <Text className={modeel}>مودل</Text>
                  </View>
                </View>
                <View className={visi}>
                  <Text className='m-auto text-primary text-xl font-bold'>
                    {product.price}
                  </Text>
                  <Text className='m-auto text-primary text-xs '>
                    {product.deal}
                  </Text>
                </View>
                <HomeBt
                  classNamee={butt}
                  title='حجز الان'
                  onPress={() => navigate.navigate("booking")}
                />
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default CarsList;
