import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Card from "../card";
import colors from "../../styles/colors";

function CardDeck({ onPress, title, cards }) {
  return (
    <Card barColor={colors.primaryDarkColor}>
      <TouchableOpacity style={styles.card} onPress={onPress} disabled={onPress ? false : true} >
        <Text style={{ fontWeight: "900", fontSize: 22, color: colors.secondaryTextColor }}>{title}</Text>
        <Text style={{ fontWeight: "900", fontSize: 18, color: colors.primaryTextColor }} >{cards} cards</Text>
      </TouchableOpacity>
    </Card>
  );
}

export default CardDeck

const styles = StyleSheet.create({
  card: {
    padding: 50,
    alignItems: "center",
    justifyContent: "center"
  }
});
