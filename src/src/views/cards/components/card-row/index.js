import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

const CardRow = ({ question, answer, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress} >
    <View style={{ flex: 1 }}>
      <View style={styles.containerQ}>
        <Text style={styles.textTitle}>
          Q:
        </Text>
        <Text style={{ color: "#7c8a98" }}>
          {question}
        </Text>
      </View>
      <View style={styles.containerA}>
        <Text style={styles.textTitle}>
          A:
        </Text>
        <Text style={{ color: "#7c8a98" }}>{answer}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default CardRow;