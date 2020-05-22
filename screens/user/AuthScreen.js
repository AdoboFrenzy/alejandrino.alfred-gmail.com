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
  ActivityIndicator,
  Alert,
} from "react-native";

import { useDispatch } from "react-redux";

import { signup, login } from "../../store/actions/auth";

import { LinearGradient } from "expo-linear-gradient";

import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";

import Colors from "../../constants/Colors";

const AuthScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (error) Alert.alert("An Error Occurred", error, [{ text: "OK" }]);
  }, [error]);

  const dispatch = useDispatch();

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.scrollview}>
      <View style={styles.screen}>
        <LinearGradient colors={["white", "lightgrey"]} style={styles.gradient}>
          <Card style={styles.container}>
            <View style={styles.loginHeader}>
              <Text style={styles.headerText}>
                Please {isSignUp ? "Sign Up" : "Login"} to proceed!
              </Text>
            </View>
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
            <Button
              title={isSignUp ? "Sign Up" : "Login"}
              onPress={async () => {
                setError(null);
                const action = isSignUp ? signup : login;
                setIsLoading(true);
                try {
                  await dispatch(action(userName, password));

                  setUserName("");
                  setPassword("");
                  props.navigation.navigate("Shop");
                } catch (err) {
                  setError(err.message);
                  setIsLoading(false);
                }
              }}
              color={Colors.primary}
            />
            <Button
              title={`Switch to ${isSignUp ? "Login" : "Sign Up"}`}
              onPress={() => {
                setIsSignUp((prevState) => !prevState);
              }}
              color={Colors.accent}
            />
          </Card>
        </LinearGradient>
      </View>
    </View>
  );
};

AuthScreen.navigationOptions = (navOptions) => {
  // const isSignUp = navOptions.navigation.getParam("isSignUp");

  return {
    headerTitle: "Authentication",
  };
};

const styles = StyleSheet.create({
  scrollview: { flex: 1, height: "100%" },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginHeader: {
    alignItems: "center",
    // padding: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  headerText: {
    fontFamily: "open-sans",
    color: Colors.primary,
    fontSize: 18,
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 3,
    // textShadowColor: "grey",
  },
  gradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    width: "85%",
    padding: 20,
    backgroundColor: "white",
  },
});

export default AuthScreen;
