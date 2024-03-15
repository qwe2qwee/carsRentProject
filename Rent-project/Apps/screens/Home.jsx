import React, { useContext } from "react";
import { View, Text } from "react-native";
import Snackbar from "react-native-snackbar";
import { FAB } from "@rneui/themed";
import AppwriteContext from "./Login/AppwriteLog/AppwriteContext";

const Home = () => {
  const [userData, setUserData] = useState(initialState);
  const { appwrite, setIsLoggedIn } = useContext(AppwriteContext);

  const handleLogout = () => {
    appwrite.logout().then(() => {
      setIsLoggedIn(false);
      Snackbar.show({
        text: "Logout Successful",
        duration: Snackbar.LENGTH_SHORT,
      });
    });
  };

  useEffect(() => {
    appwrite.getCurrentUser().then((response) => {
      if (response) {
        const user = {
          name: response.name,
          email: response.email,
          phoneNumber: response.phoneNumber,
        };
        setUserData(user);
      }
    });
  }, [appwrite]);

  return (
    <View className=' flex justify-center items-center '>
      <Text>Home</Text>
      {userData && (
        <View>
          <Text>Name: {userData.name}</Text>
          <Text>Email: {userData.email}</Text>
          <Text>Phone: {userData.phoneNumber}</Text>
        </View>
      )}
    </View>
  );
};

export default Home;
