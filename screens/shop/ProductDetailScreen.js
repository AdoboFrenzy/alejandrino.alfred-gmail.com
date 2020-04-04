import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView
} from "react-native";

import { useSelector } from "react-redux";

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = props.navigation.getParam("product");
  //   const availableProducts = useSelector(
  //     state => state.products.availableProducts
  //   );

  //   const selectedProduct = availableProducts.find(
  //     product => product.id === productId
  //   );

  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

ProductDetailScreen.navigationOptions = navData => {
  const selectedProduct = navData.navigation.getParam("product");

  return {
    headerTitle: selectedProduct.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  image: {
    width: "100%",
    height: 300
  }
});

export default ProductDetailScreen;
