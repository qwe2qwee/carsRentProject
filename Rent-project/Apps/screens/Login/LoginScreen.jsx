import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Pressable,
  StatusBar,
} from "react-native";
import Button from "../../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email.length < 1 || password.length < 1) {
      setError("All fields are required");
    } else {
      const user = {
        email,
        password,
      };
      appwrite
        .login(user)
        .then((response) => {
          if (response) {
            setIsLoggedIn(true);
            Snackbar.show({
              text: "Login Success",
              duration: Snackbar.LENGTH_SHORT,
            });
          }
        })
        .catch((e) => {
          console.log(e);
          setEmail("Incorrect email or password");
        });
    }
  };

  return (
    <View className='flex-1 bg-primary'>
      <StatusBar barStyle='light-content' backgroundColor={"#FF6600"} />
      <Text className='text-secondary p-14 font-bold text-5xl mb-8'>دخول</Text>
      <View className='bg-secondary flex-1 pt-16 px-8 rounded-t-3xl'>
        <Text className='text-primary text-[40px] font-bold'> مرحبا بك</Text>
        <Text className='text-gray-600 mr-6'>دخول للحساب</Text>
        <TextInput
          className='w-full border-solid border-b-2 h-9 border-b-thridC my-5'
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <View className='relative'>
          <TextInput
            className='w-full border-solid border-b-2 h-9 border-b-thridC my-5 mb-9 pr-8'
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} // Toggle based on state
          />
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            className='h-5 w-5  absolute right-2 top-6'>
            <MaterialCommunityIcons name='eye-off' size={20} color='black' />
          </Pressable>
        </View>

        <Button title='تسجيل دخول' onPress={handleLogin} />
        <View className=' flex flex-row justify-between mt-7'>
          <Pressable onPress={() => console.log("just visit")}>
            <Text className='box text-primary'>دخول كزائر</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text className='box'>إنشاء حساب</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
