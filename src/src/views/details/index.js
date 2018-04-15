import React, { Component } from "react";
import { View } from "react-native";
import CardDeck from "components/card-deck";
import Button from "components/button";
import ButtonHeader from "components/button-header";

import { connect } from "react-redux";

import styles from "./styles";

class Details extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state: { params } } = navigation;
    return {
      title: params,
      headerLeft: (
        <ButtonHeader
          iconName="ios-arrow-back"
          left
          onPress={() => navigation.goBack(null)}
        />
      )
    };
  };

  render() {
    const { deck, cardCount, navigation } = this.props;
    const canStartQuiz = cardCount > 0;

    return (
      <View style={styles.container}>
        <CardDeck
          title={deck.title}
          cards={cardCount}
          onPress={() => this.props.navigation.navigate("Cards", deck.title)}
        />

        <View style={styles.containerButton}>
          <Button
            marginRight={canStartQuiz}
            text="ADD CARD"
            onPress={() => {
              navigation.navigate("NewCard");
            }}
          />
          {canStartQuiz && (
            <Button
              color="#9642a8"
              colorText="#fff"
              marginLeft
              text="START QUIZ"
              onPress={() => {
                navigation.navigate("Quiz");
              }}
            />
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const deck = state.decks.decks[state.decks.deckKeySelected];
  return {
    deck,
    cardCount: Object.keys(deck.questions || {}).length
  };
};

export default connect(mapStateToProps)(Details);
