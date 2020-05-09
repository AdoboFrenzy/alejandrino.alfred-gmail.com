import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Button, FlatList, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct } from "../../store/actions/products";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

import ProductItem from "../../components/shop/ProductItem";

import Colors from "../../constants/Colors";

const UserProductsScreen = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const userProducts = useSelector((state) => state.products.userProducts);

  // useEffect(() => {
  //   if (error) {
  //     Alert.alert("An Error Occurred!", error, [{ text: "OK" }]);
  //   }
  // }, [error]);

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

    const deleteHandler =
      (() => {
        try {
          Alert.alert(
            "Are you sure?",
            "Do you really want to delete this item?",
            [
              { text: "No", style: "default" },
              {
                text: "Yes",
                style: "destructive",
                onPress: () => {
                  dispatch(deleteProduct(itemData.item.id));
                },
              },
            ]
          );
        } catch (err) {
          // setError(err.message);
        }
      },
      [dispatch, itemData.item.id]);

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
          // onPress={() => {
          //   // dispatch(deleteProduct(itemData.item.id));
          //   props.navigation.navigate({
          //     routeName: "DeleteProducts",
          //     params: {
          //       productId: itemData.item.id,
          //       title: itemData.item.title,
          //     },
          //   });
          // }}
          onPress={deleteHandler}
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
