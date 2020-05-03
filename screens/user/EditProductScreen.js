import React, { useState, useEffect, useCallback, useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

import Input from "../../components/UI/Input";

import { addProduct, editProduct } from "../../store/actions/products";

import Colors from "../../constants/Colors";

//   this.id = id;
//   this.ownerId = ownerId;
//   this.title = title;
//   this.imageUrl = imageUrl;
//   this.description = description;
//   this.price = price;

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
const SHOW_ERRORS = "SHOW_ERRORS";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };

    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };

    let formIsValid = true;
    for (const key in updatedValidities) {
      formIsValid = formIsValid && updatedValidities[key];
    }

    return {
      ...state,
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid,
    };
  }

  if (action.type === SHOW_ERRORS) {
    return {
      ...state,
      showErrors: true,
    };
  }

  return state;
};

const EditProductScreen = (props) => {
  const selectedProduct = props.navigation.getParam("product") || {};

  const { id, ownerId, title, imageUrl, description, price } = selectedProduct;

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      productTitle: !!id ? title : "",
      productDescription: !!id ? description : "",
      productImage: !!id ? imageUrl : "",
      productPrice: !!id ? price : "",
    },
    inputValidities: {
      productTitle: !!id ? true : false,
      productDescription: !!id ? true : false,
      productImage: !!id ? true : false,
      productPrice: !!id ? true : false,
    },
    formIsValid: !!id ? true : false,
    showErrors: false,
  });

  // const [productTitle, setProductTitle] = useState(!!id ? title : "");
  // const [titleIsValid, setTitleIsValid] = useState(false);

  // const [productDescription, setProductDescription] = useState(
  //   !!id ? description : ""
  // );

  // const [productImage, setProductImage] = useState(!!id ? imageUrl : "");

  // const [productPrice, setProductPrice] = useState(!!id ? price : "");

  const dispatch = useDispatch();

  const addorEditProduct = !!id ? editProduct : addProduct;

  const submitHandler = useCallback(() => {
    if (!formState.formIsValid) {
      Alert.alert("Wrong Input.", "Please enter valid input(s)!", [
        { text: "Okay!" },
      ]);
      dispatchFormState({ type: SHOW_ERRORS });
      return;
    }

    dispatch(
      addorEditProduct({
        title: formState.inputValues.productTitle,
        imageURL: formState.inputValues.productImage,
        description: formState.inputValues.productDescription,
        price: +formState.inputValues.productPrice,
        existingId: id,
      })
    );
    props.navigation.popToTop();
  }, [dispatch, id, formState]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const textChangeHandler = (inputIdentifier, text) => {
    let isValid = false;

    if (text.trim().length > 0) {
      isValid = true;
    }

    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      isValid,
      input: inputIdentifier,
    });
  };

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
          <Input
            label="Title"
            placeholder="Product Title"
            onChangeText={(text) => {
              textChangeHandler("productTitle", text);
            }}
            defaultValue={formState.inputValues.productTitle}
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
            showErrors={formState.showErrors}
            validInput={formState.inputValidities.productTitle}
          />
          {/* <View style={styles.subContainer}>
            <Text style={styles.label}>Title: </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Product Title"
              onChangeText={(text) => {
                textChangeHandler("productTitle", text);
              }}
              defaultValue={formState.inputValues.productTitle}
              keyboardType="default"
              autoCapitalize="sentences"
              autoCorrect
              returnKeyType="next"
            />
            {formState.showErrors && !formState.inputValidities.productTitle ? (
              <Text style={styles.error}>Please Enter a Valid Title!</Text>
            ) : (
              <Text></Text>
            )}
          </View> */}

          <Input
            label="Description"
            placeholder="Product Description"
            onChangeText={(text) => {
              textChangeHandler("productDescription", text);
            }}
            defaultValue={formState.inputValues.productDescription}
            autoCapitalize="sentences"
            autoCorrect
            returnKeyType="next"
            showErrors={formState.showErrors}
            validInput={formState.inputValidities.productDescription}
          />
          {/* <View style={styles.subContainer}>
            <Text style={styles.label}>Description: </Text>
            <TextInput
              style={styles.textInput}
              multiline
              numberOfLines={4}
              placeholder="Product Description"
              onChangeText={(text) => {
                textChangeHandler("productDescription", text);
              }}
              defaultValue={formState.inputValues.productDescription}
            />
            {formState.showErrors &&
            !formState.inputValidities.productDescription ? (
              <Text style={styles.error}>
                Please Enter a Valid Description!
              </Text>
            ) : (
              <Text></Text>
            )} */}
          {/* </View> */}

          <Input
            label="Image URL"
            placeholder="Product Image URL"
            onChangeText={(text) => {
              textChangeHandler("productImage", text);
            }}
            defaultValue={formState.inputValues.productImage}
            returnKeyType="next"
            showErrors={formState.showErrors}
            validInput={formState.inputValidities.productImage}
          />
          {/* <View style={styles.subContainer}>
            <Text style={styles.label}>Image URL: </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Product Image"
              onChangeText={(text) => {
                textChangeHandler("productImage", text);
              }}
              defaultValue={formState.inputValues.productImage}
            />
            {formState.showErrors && !formState.inputValidities.productImage ? (
              <Text style={styles.error}>Please Enter a Valid Image URL!</Text>
            ) : (
              <Text></Text>
            )}
          </View> */}

          <Input
            label="Price"
            placeholder="Product Price"
            onChangeText={(text) => {
              textChangeHandler("productPrice", text);
            }}
            defaultValue={formState.inputValues.productPrice.toString()}
            keyboardType="decimal-pad"
            returnKeyType="next"
            showErrors={formState.showErrors}
            validInput={formState.inputValidities.productPrice}
          />
          {/* <View style={styles.subContainer}>
            <Text style={styles.label}>Price: </Text>
            <TextInput
              editable={!selectedProduct.id}
              keyboardType="decimal-pad"
              style={{ ...styles.textInput, ...disabledStyle }}
              placeholder="Product Price"
              onChangeText={(text) => {
                textChangeHandler("productPrice", text);
              }}
              defaultValue={
                !!price ? formState.inputValues.productPrice.toString() : ""
              }
            />
            {formState.showErrors && !formState.inputValidities.productPrice ? (
              <Text style={styles.error}>Please Enter a Valid Price!</Text>
            ) : (
              <Text></Text>
            )}
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

EditProductScreen.navigationOptions = (navData) => {
  const productId = navData.navigation.getParam("productId");

  const submitHandler = navData.navigation.getParam("submit");

  return {
    headerTitle: !!productId ? "Editing Product" : "Adding New Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="save" iconName="save" onPress={submitHandler} />
      </HeaderButtons>
    ),
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
    width: "100%",
    padding: 20,
  },
  subContainer: {
    width: "100%",
    marginVertical: 5,
  },
  label: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    padding: 5,
    margin: 5,
  },
  error: {
    color: "red",
  },
});

export default EditProductScreen;
