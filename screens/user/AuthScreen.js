import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";

import Input from "../../components/UI/Input";

const AuthScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <Text>Auth Screen</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AuthScreen;
