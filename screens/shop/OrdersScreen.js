import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  console.log(orders);

  return (
    <View style={styles.screen}>
      <Text>Orders Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OrdersScreen;
