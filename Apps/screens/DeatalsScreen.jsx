import React, { useState } from "react";
import { View, Text } from "react-native";
import "swiper/swiper-bundle.min.css"; // Include Swiper styles
import DetailsSlideShow from "../components/DeatalsCom/DetailsSlideShow";
import DetailsNav from "../components/DeatalsCom/DetailsNav";
import TopTabsGroup from "../components/DeatalsCom/DetealNav/TopTabsGroup";

const DeatalsScreen = ({ route }) => {
  const carId = route.params.carId;

  const { detailsData } = route.params; // Access details data passed from navigation

  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

  const handleLinkPress = (index) => {
    setCurrentLinkIndex(index);
    // Handle link selection logic here (e.g., navigate to a different screen)
  };

  const dataDet = { 
    right:{
      model:'تويوتا',
      manufacturer:"يارس",
      year:"2024",
      innerColor:'اسود',
      outColor:'ابيض',
      engineSize:'1.5',
      cylinders:'4',
      typeGravel:'CVT',
      incoming:'سعودي',
      pushType:'رباعي',
      ability:'39',
      category:'LX',
    }
  }


  
  return (
    <View className='bg-secondary flex-1'>
      {/* <Text>{`${carId} this is the car id`}</Text> */}
      <DetailsSlideShow />
      <TopTabsGroup Data={dataDet.right} />
    </View>
  );
};

export default DeatalsScreen;
