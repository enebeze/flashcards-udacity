import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Animated
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Swipeout from "react-native-swipeout";

import CardDeck from "../../components/card-deck";
import ButtonHeader from "../../components/button-header";
import Header from "../../components/header";
import { ScrollView } from "react-native-gesture-handler";

import DecksAction from "store/ducks/decks";
import { connect } from "react-redux";
import Card from "../../components/card";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    //header: null
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

    this.offset = 0;

    this.state = {
      scrollOffset: new Animated.Value(0),
      titleWidth: 0,
      refreshing: true
    };
  }

  componentDidMount() {
    this.state.scrollOffset.addListener(({ value }) => (this.offset = value));
    this.props.getAll();
  }

  onScroll = e => {
    const scrollSensitivity = 4 / 3;
    const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
    this.state.scrollOffset.setValue(offset);
  };

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
    this.props.navigation.navigate("NewDeck", deck)
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
    
    const { title, questions } = item;

    return (
      <Swipeout 
        autoClose={true}
        backgroundColor= '#fff'
        right={swipeBtns}>
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
    const { refreshing, scrollOffset } = this.state;

    const screenWidth = Dimensions.get("window").width;

    return (
      <View style={styles.container}>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  card: {
    padding: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    backgroundColor: "#FD4176",
    borderBottomWidth: 1,
    borderColor: "gainsboro",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingBottom: 8
  }
});

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispatchToProps = {
  getAll: DecksAction.requestDecks,
  selectedDeck: DecksAction.selectedDeck,
  deleteDeck: DecksAction.deleteDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
