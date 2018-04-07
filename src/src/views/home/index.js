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

import CardDeck from "../../components/card-deck";
import ButtonHeader from "../../components/button-header";
import Header from "../../components/header";
import { ScrollView } from "react-native-gesture-handler";

import DecksAction from "store/ducks/decks";
import { connect } from "react-redux";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    //header: null
    title: "Decks",
    headerRight: (
      <ButtonHeader
        iconName="ios-add"
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
  }

  selectedCard = card => {
    card.cardCount = Object.keys(card.questions || { }).length;
    this.props.selectedCard(card);
    this.props.navigation.navigate("Details", card.title);
  }

  render() {
    const { decks, loading, error } = this.props.decks;
    const arrayDecks = Object.values(decks);
    const { refreshing, scrollOffset } = this.state;

    const screenWidth = Dimensions.get('window').width;

    return (
      <View style={styles.container}>
        {/* <Header 
          title="Flash Cards Udacity" 
          offset={this.offset} 
          scrollOffset={scrollOffset} 
          actionHeaderRight={() => this.props.navigation.navigate("NewDeck")}
          /> */}

        <FlatList
          data={arrayDecks}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => {
            const { title, questions } = item;
            return (
            <CardDeck
              title={title}
              cards={questions ? Object.keys(questions).length : 0}
              onPress={() => this.selectedCard(item) }
            />
          )
          } }
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
    backgroundColor: '#FD4176',
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 8,
  },
});

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispatchToProps = {
  getAll: DecksAction.requestDecks,
  selectedCard: DecksAction.selectedCard
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
