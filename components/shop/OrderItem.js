import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrderItem = (props) => {
  const { id, items, totalAmount, date } = props;

  console.log(props);

  return (
    <View>
      <Text>{id}</Text>
      <Text>{date.toString()}</Text>

      {items.map((item, index) => {
        return (
          <View key={item.id}>
            <Text>{item.productTitle}</Text>
            <Text>{item.productCost}</Text>
          </View>
        );
      })}

      <Text>{totalAmount}</Text>
    </View>
    // <View>
    //   <Text> Orders screen</Text>
    // </View>
  );
};

const styles = StyleSheet.create({});

export default OrderItem;
