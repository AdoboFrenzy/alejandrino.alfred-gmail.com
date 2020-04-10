import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import Colors from "../../constants/Colors";

import { addToCart, removeCartItem } from "../../store/actions/cart";

import CartItem from "../../components/shop/CartItem";

const CartScreen = (props) => {
  const cartTotalSum = useSelector((state) => state.cart.totalSum);

  const cartItems = useSelector((state) => {
    const transformedCartItems = [];

    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productCost: state.cart.items[key].productCost,
        quantity: state.cart.items[key].quantity,
        totalCost: state.cart.items[key].totalCost,
      });
    }

    return transformedCartItems;
  }).sort((item1, item2) => item1.productTitle > item2.productTitle);

  const availableProducts = useSelector(
    (state) => state.products.availableProducts
  );

  const dispatch = useDispatch();

  const renderCartItem = (itemData) => {
    const selectedProduct = availableProducts.find(
      (product) => product.id === itemData.item.productId
    );

    return (
      <CartItem
        id={itemData.item.productId}
        title={itemData.item.productTitle}
        price={itemData.item.productCost}
        quantity={itemData.item.quantity}
        totalCost={itemData.item.totalCost}
        onAddToCart={() => {
          dispatch(addToCart(selectedProduct));
        }}
        onRemove={() => {
          dispatch(removeCartItem(selectedProduct));
        }}
      />
    );
  };

  // let test;
  // if (cartItems.length > 0)
  //   test = (
  //     <View style={styles.item}>
  //       <View style={{ width: 32 }}>
  //         <Text>Qty</Text>
  //       </View>
  //       <View style={{ width: "25%" }}>
  //         <Text>Title</Text>
  //       </View>
  //       <View style={{ width: "25%" }}>
  //         <Text>Cost</Text>
  //       </View>
  //       <View style={{ width: "20%" }}>
  //         <Text>Sub-Total</Text>
  //       </View>
  //       <View>
  //         <Text>Del</Text>
  //       </View>
  //     </View>
  //   );

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total: <Text style={styles.amount}>${cartTotalSum.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          color={Colors.accent}
          disabled={cartItems.length === 0}
          onPress={() => {}}
        />
      </View>
      {/* {test} */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={renderCartItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
    backgroundColor: "transparent",
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
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

export default CartScreen;
