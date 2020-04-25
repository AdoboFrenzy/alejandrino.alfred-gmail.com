import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import {} from "react-redux";

import Colors from "../../constants/Colors";

//   this.id = id;
//   this.ownerId = ownerId;
//   this.title = title;
//   this.imageUrl = imageUrl;
//   this.description = description;
//   this.price = price;

const EditProductScreen = (props) => {
  const selectedProduct = props.navigation.getParam("product") || {};

  const { id, ownerId, title, imageUrl, description, price } = selectedProduct;

  const [productTitle, setProductTitle] = useState(title);
  const [productDescription, setProductDescription] = useState(description);
  const [productImage, setProductImage] = useState(imageUrl);
  const [productPrice, setProductPrice] = useState(price);

  return (
    <View style={styles.screen}>
      <View>
        {!!selectedProduct.id ? (
          <Text style={styles.title}>
            Editing{" "}
            <Text style={{ fontFamily: "open-sans-bold" }}>
              {selectedProduct.title}
            </Text>
          </Text>
        ) : (
          <Text>Adding New Product</Text>
        )}
      </View>

      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text>Title: </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Product Title"
            onChangeText={(text) => setProductTitle(text)}
            defaultValue={productTitle}
          />
        </View>
        <View style={styles.subContainer}>
          <Text>Description: </Text>
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={4}
            placeholder="Product Description"
            onChangeText={(text) => setProductDescription(text)}
            defaultValue={productDescription}
          />
        </View>
        <View style={styles.subContainer}>
          <Text>Image URL: </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Product Image"
            onChangeText={(text) => setProductImage(text)}
            defaultValue={productImage}
          />
        </View>
        <View style={styles.subContainer}>
          <Text>Price: </Text>
          <TextInput
            editable={!selectedProduct.id}
            keyboardType="number-pad"
            style={styles.textInput}
            placeholder="Product Price"
            onChangeText={(text) => setProductPrice(text)}
            defaultValue={productPrice ? productPrice.toString() : ""}
          />
        </View>
        <Button
          title="Save"
          color={Colors.primary}
          onPress={() => {
            console.log("saved!");
          }}
        />
      </View>
    </View>
  );
};

EditProductScreen.navigationOptions = (navData) => {
  const productId = navData.navigation.getParam("productId");

  return {
    headerTitle: !!productId ? "Editing Product" : "Adding New Product",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 20,
    marginBottom: 10,
  },
  container: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    width: "75%",
    padding: 20,
  },
  subContainer: { marginVertical: 5 },
  textInput: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    fontSize: 16,
  },
});

export default EditProductScreen;
