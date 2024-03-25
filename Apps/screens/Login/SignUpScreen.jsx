import React, { useContext, useState } from "react";
import { View, Text, TextInput, Pressable, StatusBar } from "react-native";
import Button from "../../components/Button";
import AppwriteContext from "./AppwriteLog/AppwriteContext";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  useCreateUserAccount,
  useSignInAccount,
} from "../../../lib/react-quary/qeuries";
import { useUserContext } from "../../../context/authcontext";

// import Snackbar from "react-native-snackbar";

const SignUpScreen = () => {
  const { mutateAsync: createUserAccount, isLoading: isCreatingAccount } =
    useCreateUserAccount();
  const { mutateAsync: signInAccount, isLoading: isSigningInUser } =
    useSignInAccount();
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const navigation = useNavigation();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  let passShow = showPassword ? "#6C6C6C" : "black";
  let passShowCon = showConfirmPassword ? "#6C6C6C" : "black";

  const handleSignup = async () => {
    // Basic field validation with error handling
    try {
      if (
        !name.trim() ||
        !email.trim() ||
        !password.trim() ||
        !phoneNumber.trim()
      ) {
        throw new Error("الرجاء ملئ كل البيانات");
      }

      // Enhanced email validation using a regular expression
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        throw new Error("الايميل غير صالح");
      }

      if (password !== passwordConfirm) {
        setError("كلمات المرور غير متطابقة. يرجى التأكد من إدخالها بشكل صحيح.");
        return;
      }
    } catch (error) {
      setError(error.message);
      return;
    }

    // Create a user object with trimmed values
    const user = {
      name: name.trim(),
      email: email.trim(),
      phoneNumber: phoneNumber.trim(),
      password: password.trim(),
    };

    try {
      // Call createUserAccount and handle potential errors
      const newUser = await createUserAccount(user);
      if (!newUser) {
        throw new Error("Failed to create user account");
      }

      const session = await signInAccount({
        email: user.email,
        password: user.password,
      });

      if (!session) {
        setError("Something went wrong. Please login your new account");
        navigation.navigate("Login");
        return;
      }

      const isLoggedIn = await checkAuthUser();

      console.log(isLoggedIn + " fla");

      if (isLoggedIn) {
        setName("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");
        navigation.navigate("home");
        console.log("ok");
      } else {
        return setError('"Login failed. Please try again."');
      }

      console.log("User created successfully:", newUser.name);
      setError("");
      // Handle successful signup (e.g., navigate to a confirmation screen)
    } catch (error) {
      console.error("Error creating user:", error);
      setError(error.message); // Update error message for user feedback
    }
  };

  return (
    <View className='flex-1 bg-primary'>
      <StatusBar barStyle='light-content' backgroundColor={"#FF6600"} />
      <View className='relative h-48'>
        <View className='absolute top-24 right-10 '>
          <Text className='text-secondary  font-bold text-2xl '>
            مرحبا بك في
          </Text>
          <Text className='text-right text-secondary mr-1'>LEAGO</Text>
        </View>
      </View>
      <View className='bg-secondary flex-1 pt-12 px-8 rounded-t-3xl'>
        <Text className='text-primary text-[30px] font-bold text-center'>
          إنشاء حساب
        </Text>
        <TextInput
          className='w-full border-solid border-b-2 h-9 border-b-thridC my-2'
          placeholder='الاسم'
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className='w-full border-solid border-b-2 h-9 border-b-thridC my-2'
          placeholder='الإيميل'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <TextInput
          className='w-full border-solid border-b-2 h-9 border-b-thridC my-2 placeholder:text-right'
          placeholder='رقم الهاتف'
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType='phone-pad'
          maxLength={10}
        />

        <View className='relative'>
          <TextInput
            className='w-full border-solid border-b-2 h-9 border-b-thridC my-2 pl-8 text-right'
            placeholder='الرمز السري'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword} // Toggle based on state
          />
          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            className='h-9 pt-3 w-6  absolute left-2 top-[-6] '>
            <MaterialCommunityIcons name='eye-off' size={20} color={passShow} />
          </Pressable>
        </View>
        <View className='relative mb-8'>
          <TextInput 
            className='w-full border-solid border-b-2 h-9 border-b-thridC my-2 pl-8 text-right'
            placeholder=' تاكيد الرمز السري'
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            secureTextEntry={showConfirmPassword} // Toggle based on state
          />
          <Pressable
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            className='h-9 pt-3 w-6  absolute left-2 top-[-6] '>
            <MaterialCommunityIcons
              name='eye-off'
              size={20}
              color={passShowCon}
            />
          </Pressable>
        </View>
        <Button title='انشاء' onPress={handleSignup} />
        {isCreatingAccount && <Text className='text-blue-600'>Loading..</Text>}
        <Text className='text-red-600'>{error}</Text>
        <View className=' flex flex-row justify-between mt-5'>
          <Pressable onPress={() => navigation.navigate("home")}>
            <Text className='box text-primary'>دخول كزائر</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text className='box'>لدي حساب</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
