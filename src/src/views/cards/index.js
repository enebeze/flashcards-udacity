import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";

import CardRow from "./components/card-row";
import ButtonHeader from "../../components/button-header";
import Button from "../../components/button";
import Swipeout from "react-native-swipeout";

import DecksAction from "store/ducks/decks";
import { connect } from "react-redux";
import Card from "../../components/card";

class Cards extends Component {
  
  static navigationOptions = ({ navigation }) => {
    const { state: { params } } = navigation
    return {
      title: `Cards for ${params}`,
      headerLeft: (
        <ButtonHeader
          iconName="ios-arrow-back"
          left
          onPress={() => navigation.goBack(null)}
        />
      ),
      headerRight: (
        <ButtonHeader
          iconName="md-add"
          right
          onPress={() => navigation.navigate("NewCard")}
        />
      )
    };
  };

  deleteDeck = card => {
    this.props.deleteCard(this.props.decksState.deckKeySelected, card.key);
  };

  editDeck = card => {
    this.props.navigation.navigate("NewCard", card)
  }

  renderRow = ({ item }) => {
    let swipeBtns = [
      {
        text: "Delete",
        backgroundColor: "red",
        onPress: () => { this.deleteDeck(item) }
      },
      {
        text: "Edit",
        type: "primary",
        onPress: () => { this.editDeck(item) }
      }
    ];
    
    const { question, answer } = item;

    return (
      <Swipeout 
        autoClose={true}
        backgroundColor= '#fff'
        right={swipeBtns}>
        <CardRow question={question} answer={answer} onPress={() => this.props.navigation.navigate("NewCard", item)} />
      </Swipeout>
    );
  };

  render() {
    const { deck } = this.props;
    const questions = Object.values(deck.questions || { });
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }} >
        {questions.length === 0 && (
          <Card style={{ backgroundColor: "#e14e60", paddingVertical: 20 }} >
            <Text style={{ fontWeight: "900", color: "#fff", marginBottom: 20, textAlign: "center" }} >Oh no! You not added any cards!</Text>
            <Button text="Click here to add" size="small" onPress={() => this.props.navigation.navigate("NewCard") } />
          </Card>
        )}
        
        <FlatList
          data={questions}
          keyExtractor={item => item.key}
          renderItem={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  deck: state.decks.decks[state.decks.deckKeySelected],
  decksState: state.decks,
})

const mapDispatchToProps = {
  deleteCard: DecksAction.deleteCard
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
