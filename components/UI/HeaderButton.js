import React from "react";
import { Platform } from "react-native";

import Colors from "../../constants/Colors";

import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { HeaderButton } from "react-navigation-header-buttons";

const customHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={FontAwesome}
      iconSize={23}
      color={Platform.OS === "android" ? "white" : Colors.primary}
    />
  );
};

export default customHeaderButton;
