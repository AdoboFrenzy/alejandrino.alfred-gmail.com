import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";

import { deleteProduct } from "../../store/actions/products";

const DeleteProductScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const title = props.navigation.getParam("title");

  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <Text style={styles.context}>Please confirm that you want to delete</Text>
      <Text style={styles.title}>{title}</Text>
      <Button
        title="Confirm Delete"
        onPress={() => {
          //   console.log("pressed delete");
          dispatch(deleteProduct(productId));
          setTimeout(() => {
            props.navigation.popToTop();
          }, 250);
        }}
      />
    </View>
  );
};

DeleteProductScreen.navigationOptions = (navData) => {
  //   const headerTitle = navData.navigation.getParam("title");
  return {
    headerTitle: "Deleting Product",
    headerBackTitle: "Cancel",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  context: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default DeleteProductScreen;
