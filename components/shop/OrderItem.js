import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import CartItem from "../shop/CartItem";

import Colors from "../../constants/Colors";
import Card from "../UI/Card";

const OrderItem = (props) => {
  const { id, items, totalAmount, date } = props;

  const [showDetails, setShowDetails] = useState(false);

  const detailButton = showDetails ? (
    <Ionicons name="ios-arrow-up" size={23} color={Colors.primary} />
  ) : (
    <Ionicons name="ios-arrow-down" size={23} color={Colors.primary} />
  );

  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>{totalAmount.toFixed(2)}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      {/* <View style={styles.buttonContainer}>
        <Button
          title={showDetails ? "Hide Details" : "Show Details"}
          color={Colors.primary}
          onPress={() => {
            setShowDetails(!showDetails);
          }}
        />
      </View> */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          setShowDetails(!showDetails);
        }}
      >
        {detailButton}
      </TouchableOpacity>
      {showDetails && (
        <View style={styles.detailItems}>
          {items.map((item) => (
            <CartItem
              key={item.productId}
              title={item.productTitle}
              price={item.productCost}
              quantity={item.quantity}
            />
          ))}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    margin: 20,
    padding: 10,
    // alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonContainer: {
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
  detailItems: {
    width: "100%",
  },
});

export default OrderItem;
