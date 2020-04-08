import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Colors from "../constants/Colors";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductsDetailScreen from "../screens/shop/ProductDetailScreen";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {
      screen: ProductsOverviewScreen,
    },
    ProductsDetail: ProductsDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
      },
      headerBackTitleStyle: {
        fontFamily: "open-sans",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(ProductsNavigator);
