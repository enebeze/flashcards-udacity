import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Block = ({ text, value, border }) => (
  <View
    style={[
      styles.container,
      border ? { borderLeftWidth: 1, borderRightWidth: 1, borderColor: "#dde0e4" } : { }
    ]}
  >
    <Text style={styles.text}>{text}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default Block;