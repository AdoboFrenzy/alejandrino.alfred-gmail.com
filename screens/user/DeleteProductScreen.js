// import React from "react";
// import { View, Text, StyleSheet, Button, Alert } from "react-native";
// import { useDispatch } from "react-redux";

// import { deleteProduct } from "../../store/actions/products";

// const DeleteProductScreen = (props) => {
//   const productId = props.navigation.getParam("productId");
//   const title = props.navigation.getParam("title");

//   const dispatch = useDispatch();

//   const deleteHandler = () => {
//     Alert.alert("Are you sure?", "Do you really want to delete this item?", [
//       { text: "No", style: "default" },
//       {
//         text: "Yes",
//         style: "destructive",
//         onPress: () => {
//           console.log("deleting");
//         },
//       },
//     ]);
//   };

//   return (
//     <View style={styles.screen}>
//       <View style={styles.context}>
//         <Text style={styles.message}>
//           Please confirm that you want to delete:
//         </Text>
//         <Text style={styles.title}>{title}</Text>
//         <Button
//           title="Delete"
//           // onPress={() => {
//           //   //   console.log("pressed delete");
//           //   // dispatch(deleteProduct(productId));
//           //   // setTimeout(() => {
//           //   //   props.navigation.popToTop();
//           //   // }, 250);
//           // }}
//           onPress={deleteHandler}
//         />
//       </View>
//     </View>
//   );
// };

// DeleteProductScreen.navigationOptions = (navData) => {
//   //   const headerTitle = navData.navigation.getParam("title");
//   return {
//     headerTitle: "Deleting Product",
//     headerBackTitle: "Cancel",
//     // headerLeft: () => <Button title="< Cancel" onPress={() => {}} />,
//   };
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   context: {
//     alignItems: "center",
//     shadowColor: "black",
//     shadowOpacity: 0.26,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//     elevation: 5,
//     borderRadius: 10,
//     backgroundColor: "white",
//     padding: 20,
//   },
//   message: {
//     fontFamily: "open-sans",
//     fontSize: 18,
//   },
//   title: {
//     fontFamily: "open-sans-bold",
//     fontSize: 20,
//     marginTop: 10,
//     marginBottom: 20,
//   },
// });

// export default DeleteProductScreen;
