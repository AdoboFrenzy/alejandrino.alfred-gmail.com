import React from "react";

import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import Colors from "../constants/Colors";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductsDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";
import EditProductScreen from "../screens/user/EditProductScreen";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

const defaultNavOptions = {
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
};

const navOptionsDrawerIcon = (icon1, icon2) => {
  if (!icon2) icon2 = icon1;

  return {
    drawerIcon: (drawerConfig) => (
      <Ionicons
        name={Platform.OS === "android" ? icon1 : icon2}
        size={23}
        color={drawerConfig.tintColor}
      />
    ),
  };
};

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {
      screen: ProductsOverviewScreen,
    },
    ProductsDetail: ProductsDetailScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: navOptionsDrawerIcon("ios-basket"),
    defaultNavigationOptions: defaultNavOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    navigationOptions: navOptionsDrawerIcon("md-list", "ios-list"),
    defaultNavigationOptions: defaultNavOptions,
  }
);

const UserProductsNavigator = createStackNavigator(
  {
    UserProducts: UserProductsScreen,
    EditUserProducts: EditProductScreen,
  },
  {
    navigationOptions: navOptionsDrawerIcon("md-cash"),
    defaultNavigationOptions: defaultNavOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    UserProducts: UserProductsNavigator,
  },
  {
    contentOptions: { activeTintColor: Colors.primary },
  }
);

export default createAppContainer(ShopNavigator);
