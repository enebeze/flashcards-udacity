import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default (ButtonHeader = ({ iconName, onPress, left, right, styles }) => (
  <TouchableOpacity onPress={onPress} style={styles} >
    <Ionicons
      size={30}
      name={iconName}
      style={left ? { marginLeft: 12 } : { marginRight: 12 }}
      color="#fff"
    />
  </TouchableOpacity>
));
