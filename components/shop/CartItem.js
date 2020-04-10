import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  TouchableNativeFeedbackBase,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  const { id, title, price, quantity, totalCost } = props;

  const TouchableComponent =
    Platform.OS === "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;

  return (
    <View>
      <TouchableComponent>
        <View style={styles.item}>
          <TouchableComponent onPress={props.onAddToCart}>
            <Text style={styles.itemData}>
              <Text style={styles.qty}>{quantity} </Text>
              <Text style={styles.title}>{title.slice(0, 12)}</Text>
            </Text>
          </TouchableComponent>

          <View style={styles.itemData}>
            <Text style={styles.price}>${price}</Text>
            {/* <Text>${totalCost.toFixed(2)}</Text> */}

            <TouchableComponent
              style={styles.deleteButton}
              onPress={() => {
                props.onRemove();
              }}
            >
              <Ionicons name="ios-trash" size={23} color="red" />
            </TouchableComponent>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    marginBottom: 5,
    marginHorizontal: 20,
    shadowColor: "black",
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  qty: {
    fontFamily: "open-sans",
    color: "#888",
    fontSize: 16,
    // width: 16,
    // height: 16,
    // width: 32,
    // height: 32,
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    // backgroundColor: "#98FB98",
    // borderRadius: 16,
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    // justifyContent: "flex-start",
    // backgroundColor: "red",
  },
  price: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    // width: "25%",
    // justifyContent: "flex-start",
  },
  totalCost: {
    // backgroundColor: "blue",
    // width: "20%",
  },
  deleteButton: {
    // backgroundColor: "green",
    marginLeft: 20,
  },
});

export default CartItem;
