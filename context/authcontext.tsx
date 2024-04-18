import React, { createContext, useContext, useEffect, useState } from "react";

import { IUser } from "../types/index";
import { getCurrentUser } from "../Apps/Appwrite/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const INITIAL_USER = {
  id: "",
  name: "",
  phone_number: "",
  email: "",
  points: ""
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigation = useNavigation();
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
      const currentAccount = await getCurrentUser();
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          phone_number: currentAccount.phone_number,
          email: currentAccount.email,
          points: currentAccount.loyalty_points, 
        });
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkAuthStatus = async () => {
      // Retrieve data from AsyncStorage using getItem
      const cookieFallback = await AsyncStorage.getItem("cookieFallback");

      if (
        cookieFallback === "[]" ||
        cookieFallback === null ||
        cookieFallback === undefined
      ) {
        // Navigate to sign-in if cookieFallback is empty or an empty array
        navigation.navigate("Login");
      }

      // Handle errors appropriately (e.g., display an error message or redirect)
    };

    // Call checkAuthStatus asynchronously within useEffect
    checkAuthStatus();
    checkAuthUser();
  }, []);

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useUserContext = () => useContext(AuthContext);
