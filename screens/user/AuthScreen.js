import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Input from "../../components/UI/Input";

import Color from "../../constants/Colors";

const AuthScreen = (props) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    props.navigation.setParams({ isSignUp });
  }, [isSignUp]);

  return (
    <ScrollView>
      <View style={styles.loginHeader}>
        <Text style={styles.headerText}>
          Please {isSignUp ? "Sign Up" : "Login"} to proceed!
        </Text>
      </View>
      <View style={styles.container}>
        <Input
          label="User Name"
          placeholder="User Name"
          onChangeText={(text) => {
            setUserName(text);
          }}
          defaultValue={userName}
          autoCapitalize="sentences"
          autoCorrect
          returnKeyType="next"
        />
        <Input
          label="Password"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
          defaultValue={password}
          autoCapitalize="sentences"
          autoCorrect
          returnKeyType="next"
        />
        <Button title="Submit" onPress={() => {}} color={Color.primary} />
        <Button
          title={`Switch to ${isSignUp ? "Sign In" : "Sign Up"}`}
          onPress={() => {
            setIsSignUp((prevState) => !prevState);
          }}
          color={Color.primary}
        />
      </View>
    </ScrollView>
  );
};

AuthScreen.navigationOptions = (navOptions) => {
  const isSignUp = navOptions.navigation.getParam("isSignUp");

  return {
    headerTitle: "Authentication",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginHeader: {
    alignItems: "center",
    // padding: 10,
    marginVertical: 10,
  },
  headerText: {
    fontFamily: "open-sans",
    color: Color.primary,
    fontSize: 20,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    textShadowColor: "grey",
  },
  container: {
    width: "100%",
    padding: 20,
  },
});

export default AuthScreen;
