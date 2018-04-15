import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Card from "../card";
import colors from "styles/colors";

import styles from "./styles";

function CardDeck({ onPress, title, cards }) {
  return (
    <Card barColor={colors.primaryDarkColor}>
      <TouchableOpacity style={styles.container} onPress={onPress} disabled={onPress ? false : true} >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.card} >{cards} cards</Text>
      </TouchableOpacity>
    </Card>
  );
}

export default CardDeck

