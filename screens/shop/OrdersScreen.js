import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

import OrderItem from "../../components/shop/OrderItem";

const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  const renderOrderItem = (itemData) => {
    return (
      <OrderItem
        id={itemData.item.id}
        items={itemData.item.items}
        totalAmount={itemData.item.totalAmount}
        date={itemData.item.date}
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
});

export default OrdersScreen;
