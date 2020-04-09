import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CartItem = (props) => {
  const { id, title, price, quantity, totalCost } = props;
  //   console.log(props);
  return (
    <View style={styles.item}>
      <Text>{quantity}</Text>
      <Text>{title.slice(0, 12)}</Text>
      <Text>{price}</Text>
      <Text>{totalCost}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    padding: 10,
    shadowColor: "black",
    backgroundColor: "white",
  },
});

export default CartItem;
