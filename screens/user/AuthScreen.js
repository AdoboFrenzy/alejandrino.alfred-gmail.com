import React, { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Button,
} from "react-native";

import Input from "../../components/UI/Input";

import Color from "../../constants/Colors";

const AuthScreen = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  console.log(userName);
  console.log(password);

  return (
    <ScrollView>
      <View style={styles.loginHeader}>
        <Text style={styles.headerText}>Please login to proceed!</Text>
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
          caretHidden={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
          defaultValue={password}
          autoCapitalize="sentences"
          autoCorrect
          returnKeyType="next"
        />
      </View>
      <Button title="Submit" onPress={() => {}} color={Color.accent} />
    </ScrollView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "Login",
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
