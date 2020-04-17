import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import CartItem from "../shop/CartItem";

const OrderItem = (props) => {
  const { id, items, totalAmount, date } = props;

  return (
    <View>
      <Text>{id}</Text>
      <Text>{date.toString()}</Text>

      <Text>{totalAmount}</Text>
    </View>
    // <View>
    //   <Text> Orders screen</Text>
    // </View>
  );
};

const styles = StyleSheet.create({});

export default OrderItem;
