import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";

import { useDispatch } from "react-redux";

import { authenticate } from "../store/actions/auth";

const StartupScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        props.navigation.navigate("Auth");
        return;
      }

      const transformedData = JSON.parse(userData);
      const { userId, token, expDate } = transformedData;

      const expirationDate = new Date(expDate);

      if (expirationDate <= new Date() || !token || !userId) {
        props.navigation.navigate("Auth");
        return;
      }

      const expTime = expirationDate.getTime() - new Date().getTime();

      dispatch(authenticate(userId, token, expTime));
      props.navigation.navigate("Shop");
    };

    tryLogin();
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <Text>Startup Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartupScreen;
