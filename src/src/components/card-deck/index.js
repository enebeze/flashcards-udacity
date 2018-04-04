import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Card from "../card";

function CardDeck({ onPress, title, cards }) {
  return (
    <Card barColor="#479484">
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
        <Text>{`${cards} cards` }</Text>
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
