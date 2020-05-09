import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

import { fetchOrders } from "../../store/actions/orders";

import OrderItem from "../../components/shop/OrderItem";

import Colors from "../../constants/Colors";

const OrdersScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const loadOrders = useCallback(async () => {
    setIsLoading(true);
    await dispatch(fetchOrders());
    setIsLoading(false);
  }, [dispatch]);

  // useEffect(() => {
  //   const willFocusSub = props.navigation.addListener("willFocus", () => {
  //     loadOrders();
  //   });

  //   return () => {
  //     willFocusSub.remove();
  //   };
  // }, [dispatch, loadOrders]);

  useEffect(() => {
    loadOrders();
  }, [dispatch, loadOrders]);

  const orders = useSelector((state) => state.orders.orders);

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (orders.length < 1) {
    return (
      <View style={styles.screen}>
        <Text style={styles.screenText}>Your Orders List is Empty.</Text>
        <Text style={styles.screenText}>
          Add items to your Cart, then submit some Orders!
        </Text>
      </View>
    );
  }

  const renderOrderItem = (itemData) => {
    return (
      <OrderItem
        id={itemData.item.id}
        items={itemData.item.items}
        totalAmount={itemData.item.totalAmount}
        date={itemData.item.readableDate}
      />
    );
  };

  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={renderOrderItem}
    />
    // <View>
    //   <Text>Orders Screen</Text>
    // </View>
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="bars"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screenText: { fontFamily: "open-sans", fontSize: 14 },
});

export default OrdersScreen;
