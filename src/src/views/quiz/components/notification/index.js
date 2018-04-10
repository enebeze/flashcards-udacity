import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";

const Notification = ({ success }) => (
  <View
    style={[
      styles.container,
      { backgroundColor: success ? "#39d687" : "#e14e60" }
    ]}
  >
    <View style={{ paddingHorizontal: 18 }}>
      <Ionicons size={28} name={success ? "md-happy" : "md-sad"} color="#fff" />
    </View>
    <View>
      <Text style={styles.text}>{success ? "Well done!" : "Oh no!"} </Text>
      <Text style={styles.text}>
        {success
          ? "You successfully finished this deck."
          : "You need to practice more this deck."}
      </Text>
    </View>
  </View>
);

export default Notification;
