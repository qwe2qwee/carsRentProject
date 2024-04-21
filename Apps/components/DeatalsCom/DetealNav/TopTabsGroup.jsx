import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Specifications from "./Specifications";
import Features from "./Features";
import Deatals from "./Deatals";
import Installments from "./Installments";

const TopTabs = createMaterialTopTabNavigator();

const TopTabsGroup = ({ Data }) => {
  return (
    <TopTabs.Navigator
      initialRouteName='تفاصيل السيارة'
      tabBarOptions={{
        activeTintColor: "#FF6600",
        inactiveTintColor: "black",

        tabBarActiveTintColor: "#FF6600",
        activeBackgroundColor: "red",
        labelStyle: { fontSize: 10 },
      }}>
      <TopTabs.Screen name='المميزات' component={Features} />

      <TopTabs.Screen name='اقساط' component={Installments} />

      <TopTabs.Screen name='مواصفات السيارة' component={Specifications} />
      <TopTabs.Screen
        name='تفاصيل السيارة'
        component={Deatals}
        initialParams={{ data: Data }}
      />
    </TopTabs.Navigator>
  );
};

export default TopTabsGroup;
