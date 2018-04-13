import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../styles/colors";

import styles from "./styles";

const about =
  "This app allows users to study a collection of flashcards. With the app, " +
  "users will be able to create different categories of flashcards called 'decks', " +
  "add flashcards to those decks, and make the quizes in these decks.";

export default class About extends React.Component {
  static navigationOptions = {
    title: "About",
    tabBarIcon: ({ tintColor }) => {
      return (
        <Ionicons
          size={32}
          name="ios-information-circle-outline"
          style={{ color: tintColor }}
        />
      );
    }
  };

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: colors.secondaryLightColor }}>
        <View style={styles.container}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../../../assets/icon.png")}
          />
          <Text style={styles.title}>Flahscards</Text>
          <Text style={styles.description}>{about}</Text>
          <Text style={styles.smallTitle}>Author</Text>
          <Text style={styles.smallDescription}>Ebenézer Silva</Text>
          <Text style={styles.smallTitle}>Tag</Text>
          <Text style={styles.smallDescription}>Udacity</Text>
          <Text style={styles.smallTitle}>Version</Text>
          <Text style={styles.smallDescription}>1.0</Text>
        </View>
      </ScrollView>
    );
  }
}
