import React, { useState } from 'react';
import { View, Text } from 'react-native';
import 'swiper/swiper-bundle.min.css'; // Include Swiper styles
import DetailsSlideShow from '../components/DeatalsCom/DetailsSlideShow';
import DetailsNav from '../components/DeatalsCom/DetailsNav';




const DeatalsScreen = ({route}) => {
  const carId = route.params.carId;

  const { detailsData } = route.params; // Access details data passed from navigation

  const [currentLinkIndex, setCurrentLinkIndex] = useState(0);

  const handleLinkPress = (index) => {
    setCurrentLinkIndex(index);
    // Handle link selection logic here (e.g., navigate to a different screen)
  };
  

  return (
    <View>
      <Text>{` ${carId} this is the car id`}</Text>
      <DetailsSlideShow />
      <DetailsNav onLinkPress={handleLinkPress}  />
    </View>
  );
}

export default DeatalsScreen;
