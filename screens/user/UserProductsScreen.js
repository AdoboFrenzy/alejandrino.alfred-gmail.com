import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

import ProductItem from "../../components/shop/ProductItem";

const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);

  const renderUserProductItem = (itemData) => {
    return (
      <ProductItem
        title={itemData.item.title}
        price={itemData.item.price}
        image={itemData.item.imageUrl}
      />
    );
  };

  return (
    <FlatList
      data={userProducts}
      keyExtractor={(item) => item.id}
      renderItem={renderUserProductItem}
    />
  );
};

UserProductsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Products",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="menu"
            iconName="bars"
            onPress={() => {
              navData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserProductsScreen;
