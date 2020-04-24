import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditProductScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Edit Product Screen</Text>
    </View>
  );
};

EditProductScreen.navigationOptions = {
  headerTitle: "Editing Product",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditProductScreen;
