import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import CartItem from "../shop/CartItem";

import Colors from "../../constants/Colors";

const OrderItem = (props) => {
  const { id, items, totalAmount, date } = props;

  // const renderCartItem = (itemData) => {
  //   return (
  //     <CartItem
  //       id={itemData.item.productId}
  //       title={itemData.item.productTitle}
  //       price={itemData.item.productCost}
  //       quantity={itemData.item.quantity}
  //       totalCost={itemData.item.totalCost}
  //     />
  //   );
  // };

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>{totalAmount.toFixed(2)}</Text>
        <Text style={styles.date}>{date.toString()}</Text>
      </View>
      <Button title="Show Details" color={Colors.primary} />

      {/* <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalAmount: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  date: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
});

export default OrderItem;
