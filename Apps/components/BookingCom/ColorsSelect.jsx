import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Lable from "./Lable";

const ColorsSelect = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handlePress = (color) => {
    setSelectedColor(color);
  };

  return (
    <View className='flex justify-center items-center flex-1 w-full max-h-36   '>
      <Lable title='اختار اللون' />
      <View className='flex-row mb-8'>
        <Pressable
          className={`${
            selectedColor === "red" ? "shadow-gray-500" : ""
          }   rounded-full w-10 h-10 mx-2 shadow bg-red-600`} // Add shadow class
          onPress={() => handlePress("red")}
        />
        <Pressable
          className={`${
            selectedColor === "black" ? "shadow-gray-500" : ""
          } rounded-full w-10 h-10 mx-2 shadow bg-black`} // Add shadow class
          onPress={() => handlePress("black")}
        />
        <Pressable
          className={`${
            selectedColor === "blue" ? "shadow-gray-500" : "shadow-gray-500"
          }  rounded-full w-10 h-10 mx-2 shadow bg-blue-700`} // Add shadow class
          onPress={() => handlePress("blue")}
        />
        <Pressable
          className={`${
            selectedColor === "green" ? "shadow-gray-500" : ""
          } rounded-full w-10 h-10 mx-2 shadow bg-green-600 `} // Add shadow class
          onPress={() => handlePress("green")}
        />
        <Pressable
          className={`${
            selectedColor === "yellow" ? "shadow-gray-500" : ""
          } rounded-full w-10 h-10 mx-2 shadow  bg-yellow-400`} // Add shadow class
          onPress={() => handlePress("yellow")}
        />
      </View>
      {/* Shadow element (conditionally displayed) */}
      {selectedColor && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: "5%", // Set left to 50%
            width: "20%",
            height: "20%",
            borderRadius: 50, // Adjust to match button shape
            backgroundColor: selectedColor, // Dynamic background color
            shadowColor: selectedColor, // Match shadow color
            shadowRadius: 5, // Adjust shadow radius as needed
            shadowOpacity: 0.3, // Adjust shadow opacity as needed
          }}
        />
      )}
    </View>
  );
};

export default ColorsSelect;
