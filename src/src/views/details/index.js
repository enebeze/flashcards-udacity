import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CardDeck from "../../components/card-deck";
import Button from "../../components/button";

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
    const { card } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }} >
        <View>

          <CardDeck
              title={card.title}
              cards={card.cardCount}
              onPress={() => {} }
            />

        </View>
        <View style={{ alignItems: "center" }} >
          <Button color="green" text="Add Card" onPress={() => { this.props.navigation.navigate("NewCard") }} />
          <Button color="blue" text="Start Quiz" onPress={() => { }} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  card: state.decks.deckSelected
})

export default connect(mapStateToProps)(Details)
