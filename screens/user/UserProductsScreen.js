import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../store/actions/products";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

import ProductItem from "../../components/shop/ProductItem";

import Colors from "../../constants/Colors";

const UserProductsScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);

  const dispatch = useDispatch();

  const renderUserProductItem = (itemData) => {
    const selectUserProduct = () => {
      props.navigation.navigate({
        routeName: "EditUserProducts",
        params: {
          productId: itemData.item.id,
          product: itemData.item,
        },
      });
    };
    return (
      <ProductItem
        title={itemData.item.title}
        price={itemData.item.price}
        image={itemData.item.imageUrl}
        onSelect={selectUserProduct}
      >
        <Button
          color={Colors.primary}
          title="Edit"
          onPress={selectUserProduct}
        />
        <Button
          color={Colors.primary}
          title="Delete"
          onPress={() => {
            // dispatch(deleteProduct(itemData.item.id));
            props.navigation.navigate({
              routeName: "DeleteProducts",
              params: {
                productId: itemData.item.id,
                title: itemData.item.title,
              },
            });
          }}
        />
      </ProductItem>
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Product"
          iconName="plus"
          onPress={() => {
            navData.navigation.navigate("EditUserProducts");
          }}
        />
      </HeaderButtons>
    ),
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
