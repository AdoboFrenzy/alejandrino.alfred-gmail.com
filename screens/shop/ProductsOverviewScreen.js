import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  const renderProductItem = itemData => {
    return (
      <TouchableOpacity onPress={() => console.log(itemData.item)}>
        <Text>{itemData.item.title}</Text>
      </TouchableOpacity>
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

export default ProductsOverviewScreen;
