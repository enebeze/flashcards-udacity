import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default (ButtonHeader = ({ iconName, onPress, left, right }) => (
  <TouchableOpacity onPress={onPress} >
    <Ionicons
      size={30}
      name={iconName}
      style={left ? { marginLeft: 12 } : { marginRight: 12 }}
    />
  </TouchableOpacity>
));
