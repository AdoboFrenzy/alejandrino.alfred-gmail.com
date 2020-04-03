import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
7;

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  const renderProductItem = itemData => {
    return (
      <ProductItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onViewDetail={() => {
          props.navigation.navigate("ProductsDetail");
        }}
        onAddToCart={() => {}}
      />
    );
  };

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={renderProductItem}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products"
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
