import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";

import { addProduct } from "../../store/actions/products";

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

  const dispatch = useDispatch();

  const disabledStyle = !!id ? { backgroundColor: "lightgrey" } : {};

  return (
    <ScrollView>
      <View style={styles.form}>
        <View>
          <Text style={styles.title}>
            <Text style={{ fontFamily: "open-sans-bold" }}>
              {selectedProduct.title}
            </Text>
          </Text>
        </View>

        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.label}>Title: </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Product Title"
              onChangeText={(text) => setProductTitle(text)}
              defaultValue={productTitle}
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.label}>Description: </Text>
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
            <Text style={styles.label}>Image URL: </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Product Image"
              onChangeText={(text) => setProductImage(text)}
              defaultValue={productImage}
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.label}>Price: </Text>
            <TextInput
              editable={!selectedProduct.id}
              keyboardType="number-pad"
              style={{ ...styles.textInput, ...disabledStyle }}
              placeholder="Product Price"
              onChangeText={(text) => setProductPrice(text)}
              defaultValue={productPrice ? productPrice.toString() : ""}
            />
          </View>
          <Button
            title="Save"
            color={Colors.primary}
            onPress={() => {
              dispatch(
                addProduct({
                  title: productTitle,
                  imageURL: productImage,
                  description: productDescription,
                  price: parseFloat(productPrice),
                })
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = (navData) => {
  const productId = navData.navigation.getParam("productId");

  return {
    headerTitle: !!productId ? "Editing Product" : "Adding New Product",
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 18,
    marginBottom: 20,
    color: Colors.primary,
  },
  container: {
    // shadowColor: "black",
    // shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,
    // elevation: 5,
    // borderRadius: 10,
    // backgroundColor: "white",
    width: "100%",
    padding: 20,
  },
  subContainer: {
    width: "100%",
    marginVertical: 5,
  },
  label: {
    fontFamily: "open-sans",
    fontSize: 16,
  },
  textInput: {
    borderBottomWidth: 1,
    padding: 5,
    margin: 10,
    fontSize: 16,
  },
});

export default EditProductScreen;
