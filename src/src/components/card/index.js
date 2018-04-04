import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

function Card({ children, style = { }, barColor}) {
  
  return (
    <View style={[styles.container, style ]}>
      <View style={[styles.viewBarraColorLeft, { backgroundColor: barColor }]} />
      <View style={{flex: 1}}>
          {children}
      </View>
      <View style={[styles.viewBarraColorRight, { backgroundColor: barColor }]} />
    </View>
  );
};

export default Card;
