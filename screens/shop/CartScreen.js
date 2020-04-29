import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import Colors from "../../constants/Colors";

import { addToCart, removeCartItem } from "../../store/actions/cart";
import { addToOrder } from "../../store/actions/orders";

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
        deletable
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{" "}
          <Text style={styles.amount}>
            ${Math.round(cartTotalSum.toFixed(2) * 100) / 100}
          </Text>
        </Text>
        <Button
          title="Order Now"
          color={Colors.accent}
          disabled={cartItems.length === 0}
          onPress={() => {
            dispatch(addToOrder(cartItems, cartTotalSum));
            setTimeout(() => {
              props.navigation.popToTop();
            }, 300);
            // setTimeout(() => {
            //   props.navigation.navigate("Orders");
            // }, 400);
          }}
        />
      </View>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.productId}
        renderItem={renderCartItem}
      />
    </View>
  );
};

CartScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Cart",
  };
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
