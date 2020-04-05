import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/shop/HeaderButton";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  const renderProductItem = (itemData) => {
    return (
      <ProductItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onViewDetail={() => {
          props.navigation.navigate({
            routeName: "ProductsDetail",
            params: {
              productId: itemData.item.id,
              product: itemData.item,
            },
          });
        }}
        onAddToCart={() => {}}
      />
    );
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderProductItem}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="To Cart"
        iconName="shopping-cart"
        onPress={() => {
          console.log("cart button pressed");
        }}
      />
    </HeaderButtons>
  ),
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
