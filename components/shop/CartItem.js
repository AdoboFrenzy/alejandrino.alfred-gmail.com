import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const CartItem = (props) => {
  const { id, title, price, quantity, totalCost } = props;
  //   console.log(props);
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.item}>
          <TouchableOpacity onPress={props.onAddToCart}>
            <View style={styles.qty}>
              <Text>{quantity}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.title}>
            <Text>{title.slice(0, 12)}</Text>
          </View>
          <View style={styles.price}>
            <Text>${price}</Text>
          </View>
          <View style={styles.totalCost}>
            <Text>${totalCost.toFixed(2)}</Text>
          </View>
          <Button
            title="X"
            color="red"
            onPress={() => {
              console.log("delete cart item");
            }}
          />
        </View>
      </TouchableOpacity>
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
  qty: {
    // width: 16,
    // height: 16,
    width: 32,
    height: 32,
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    backgroundColor: "#98FB98",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "25%",
    justifyContent: "flex-start",
    // backgroundColor: "red",
  },
  price: {
    // backgroundColor: "green",
    width: "25%",
  },
  totalCost: {
    // backgroundColor: "blue",
    width: "20%",
  },
});

export default CartItem;
