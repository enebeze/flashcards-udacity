import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CardDeck from "../../components/card-deck";
import Button from "../../components/button";
import ButtonHeader from "../../components/button-header";

import { connect } from "react-redux";

class Details extends Component {
  
  static navigationOptions = ({ navigation }) => {
    const { state: { params } } = navigation
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
    const { deck, navigation } = this.props;
    const cardCount = Object.keys(deck.questions || {}).length;
    const canStartQuiz = cardCount > 0;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }} >
        <CardDeck title={deck.title} cards={cardCount} />
        
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 8,
            paddingTop: 20
          }}
        >
          <Button marginRight={canStartQuiz} text="ADD CARD" onPress={() => { navigation.navigate("NewCard") }} />
          {canStartQuiz && <Button color="#9642a8" colorText="#fff" marginLeft text="START QUIZ" onPress={() => { navigation.navigate("Quiz") }} />}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  deck: state.decks.decks[state.decks.deckKeySelected]
})

export default connect(mapStateToProps)(Details)
