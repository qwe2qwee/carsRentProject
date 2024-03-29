import { createStackNavigator } from "@react-navigation/stack";

import SignUpScreen from "../screens/Login/SignUpScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import Favorite from "../screens/Favorite";
import Policies from "../screens/Policies";
import Reservations from "../screens/Reservations";
import Support from "../screens/Support";
import DeatalsScreen from "../screens/DeatalsScreen";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/authcontext";
import Bookin from "../screens/Bookin";

const Stack = createStackNavigator();

function MyStack() {
  const [user, setUser] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const user = await checkAuthUser();
  //       setUser(user);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //       // Handle the error gracefully, e.g., display an error message to the user
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Signup'
        component={SignUpScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='profile'
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='favorite'
        component={Favorite}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='policies'
        component={Policies}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='reservations'
        component={Reservations}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='support'
        component={Support}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='deatals'
        component={DeatalsScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name='booking'
        component={Bookin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
