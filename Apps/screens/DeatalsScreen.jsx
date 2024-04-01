import React, { useState } from "react";
import { View, Text } from "react-native";
import "swiper/swiper-bundle.min.css"; // Include Swiper styles
import TopTabsGroup from "../components/DeatalsCom/DetealNav/TopTabsGroup";
import DetailsSlideShow from "../components/DeatalsCom/DetailsSlideshow/DetailsSlideShow";

const DeatalsScreen = ({ route }) => {
  const carId = route.params.carId;

  const { detailsData } = route.params; // Access details data passed from navigation

  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

  const handleLinkPress = (index) => {
    setCurrentLinkIndex(index);
    // Handle link selection logic here (e.g., navigate to a different screen)
  };

  const dataDet = {
    right: {
      model: "تويوتا",
      manufacturer: "يارس",
      year: "2024",
      innerColor: "اسود",
      outColor: "ابيض",
      engineSize: "1.5",
      cylinders: "4",
      typeGravel: "CVT",
      incoming: "سعودي",
      pushType: "رباعي",
      ability: "39",
      category: "LX",
    },
  };

  const dett = [
    {
      id: 1,
      title: "تويوتا يارس",
      model: "2023",
      deal: "قسط شهري",
      month: "36",
      price: "1200",
    },
    {
      id: 2,
      title: "كيا سيراتو",
      model: "2020",
      deal: "قسط شهري",
      month: "28",
      price: "1500",
    },
    {
      id: 4,
      title: "هونداي النترا",
      model: "2022",
      deal: "قسط شهري",
      month: "13",
      price: "1400",
    },
    {
      id: 6,
      title: "هونداي كونا",
      model: "2024",
      deal: "قسط شهري",
      month: "12",
      price: "2000",
    },
    {
      id: 7,
      title: "هونداي كونا",
      model: "2020",
      deal: "قسط شهري",
      month: "24",
      price: "800",
    },
    {
      id: 8,
      title: "شانجان سيدان",
      model: "2021",
      deal: "قسط شهري",
      month: "15",
      price: "1000",
    },
  ];

  const filteredItem = dett.find((item) => item.id === carId);

  if (filteredItem) {
    console.log(filteredItem); // This will print the object with ID 4
  } else {
    console.log("No item found with that ID");
  }

  return (
    <View className='bg-secondary flex-1'>
      {/* <Text>{`${carId} this is the car id`}</Text> */}
      <DetailsSlideShow dtat={filteredItem} />
      <TopTabsGroup Data={dataDet.right} />
    </View>
  );
};

export default DeatalsScreen;
