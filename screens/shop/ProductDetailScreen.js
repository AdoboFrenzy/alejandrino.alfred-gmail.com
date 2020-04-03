import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  ScrollView
} from "react-native";

const ProductDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Product Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ProductDetailScreen;
