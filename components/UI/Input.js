import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Input = (props) => {
  const disabledStyle =
    props.editable === false ? { backgroundColor: "lightgrey" } : {};

  return (
    <View style={{ ...styles.subContainer, ...props.style }}>
      <Text style={styles.label}>{props.label}: </Text>
      <TextInput
        {...props}
        style={{ ...styles.textInput, ...disabledStyle }}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        defaultValue={props.defaultValue}
      />
      {props.showErrors && !props.validInput ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Please Enter a Valid {props.label}!
          </Text>
        </View>
      ) : (
        <View style={styles.errorContainer}>
          <Text> </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  errorContainer: {
    // marginBottom: 2,
  },
  errorText: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "red",
  },
});

export default Input;

// <View style={styles.subContainer}>
//   <Text style={styles.label}>Title: </Text>
//   <TextInput
//     style={styles.textInput}
//     placeholder="Product Title"
//     onChangeText={(text) => {
//       textChangeHandler("productTitle", text);
//     }}
//     defaultValue={formState.inputValues.productTitle}
//     keyboardType="default"
//     autoCapitalize="sentences"
//     autoCorrect
//     returnKeyType="next"
//   />
//   {formState.showErrors && !formState.inputValidities.productTitle ? (
//     <Text style={styles.error}>Please Enter a Valid Title!</Text>
//   ) : (
//     <Text></Text>
//   )}
// </View>;
