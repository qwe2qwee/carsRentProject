import React from "react";
import { View, Text } from "react-native";
import { useUserContext } from "../../context/authcontext";

const Profile = ({ route }) => {
  const { user } = useUserContext();
  const userId = route.params.userId;
  console.log(userId);

  return (
    <View className='flex h-full w-full justify-center items-center bg-slate-500'>
      <Text className='text-red-600'>{user.name}</Text>
      <Text className='text-red-600 mt-5'>{user.email}</Text>
    </View>
  );
};

export default Profile;
