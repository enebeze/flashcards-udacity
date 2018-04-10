import React from "react";
import { View } from "react-native";

import Block from "../block";

import styles from "./styles";

const Result = ({ correct, incorrect, accuracy }) => (
  <View style={styles.container}>
    <Block text="CORRECT" value={correct} />
    <Block text="INCORRECT" value={incorrect} border />
    <Block text="ACCURACY" value={accuracy} />
  </View>
);

export default Result;
