import React from "react";
import { View, Text, Button } from "react-native";

const DetailsNav = ({ onLinkPress }) => {
  const nav = [{ text: "الاقساط",}, { text: "مواصفات السيارة"} , {text: "مميزات  السيارة" }];
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {nav.map((link, index) => (
        <Button
          key={index}
          title={link.text}
          onPress={() => onLinkPress(index)}
        />
      ))}
    </View>
  );
};

export default DetailsNav;
