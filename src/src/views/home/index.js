import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Swipeout from "react-native-swipeout";

import CardDeck from "../../components/card-deck";
import ButtonHeader from "../../components/button-header";

import DecksAction from "store/ducks/decks";
import { connect } from "react-redux";
import Card from "../../components/card";

import colors from "../../styles/colors";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Decks",
    headerRight: (
      <ButtonHeader
        iconName="md-add"
        right
        onPress={() => navigation.navigate("NewDeck")}
      />
    )
  });

  constructor(props) {
    super(props);

    this.state = {
      titleWidth: 0,
      refreshing: true
    };
  }

  componentDidMount() {
    /* get all decks */
    this.props.getAll();
  }

  onRefresh = () => {
    if (this.state.refreshing) {
      this.setState({ refreshing: false });
    }

    this.props.getAll();
  };

  selectedDeck = deck => {
    this.props.selectedDeck(deck.key);
    this.props.navigation.navigate("Details", deck.title);
  };

  deleteDeck = deck => {
    this.props.deleteDeck(deck.key);
  };

  editDeck = deck => {
    this.props.navigation.navigate("NewDeck", deck);
  };

  renderRow = ({ item }) => {
    let swipeBtns = [
      {
        text: "Delete",
        backgroundColor: "red",
        onPress: () => {
          this.deleteDeck(item);
        }
      },
      {
        text: "Edit",
        type: "primary",
        onPress: () => {
          this.editDeck(item);
        }
      }
    ];

    const { title, questions } = item;

    return (
      <Swipeout autoClose={true} backgroundColor={colors.secondaryLightColor} right={swipeBtns}>
        <CardDeck
          title={title}
          cards={questions ? Object.keys(questions).length : 0}
          onPress={() => this.selectedDeck(item)}
        />
      </Swipeout>
    );
  };

  render() {
    const { decks, loading, error } = this.props.decks;
    const arrayDecks = decks ? Object.values(decks) : [];
    const { refreshing } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: colors.secondaryLightColor }}>
        {loading && refreshing && (
            <ActivityIndicator
              style={{ marginTop: 50 }}
              size={1}
              color={colors.primaryDarkColor}
            />
          )}

        <FlatList
          data={arrayDecks}
          keyExtractor={item => item.key}
          renderItem={this.renderRow.bind(this)}
          refreshing={loading}
          onRefresh={this.onRefresh}
          onScroll={this.onScroll}
          scrollEventThrottle={20}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispatchToProps = {
  getAll: DecksAction.requestDecks,
  selectedDeck: DecksAction.selectedDeck,
  deleteDeck: DecksAction.deleteDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
