import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements"; // Assuming MaterialCommunityIcons

const SearchseC = ({ toggleSidebar }) => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (text) => {
    setSearchText(text);
    // Implement search logic here (e.g., filter data based on searchText)
  };
  return (
    <View className='bg-primary h-32 rounded-b-3xl relative'>
      <TouchableOpacity
        className='absolute right-5 top-1 '
        onPress={() => {
          toggleSidebar();
        }}>
        <Icon name='menu' size={24} color='white' />
      </TouchableOpacity>
      <View className='flex w-80 bg-bg_main rounded-lg overflow-hidden text-center m-auto relative mt-14'>
        <TextInput
          placeholder='Search...'
          onChangeText={handleSearch}
          className='px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 pr-10'
          value={searchText} // Apply styles (optional)
        />
        <View className='absolute right-1 top-2 flex justify-center items-center'>
          <TouchableOpacity className='w-11 '>
            <Icon name='search' size={24} color='#FF6600' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchseC;
