import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../../store/actions/cart";

import ProductItem from "../../components/shop/ProductItem";
7;

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

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
        onAddToCart={() => {
          dispatch(addToCart(itemData.item));
        }}
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
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
