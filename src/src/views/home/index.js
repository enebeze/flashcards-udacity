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

import CardDeck from "../../components/card-deck";
import ButtonHeader from "../../components/button-header";
import { ScrollView } from "react-native-gesture-handler";

import DecksAction from "store/ducks/decks";
import { connect } from "react-redux";

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Decks",
    headerRight: (
      <ButtonHeader
        iconName="ios-add"
        right
        onPress={() => navigation.navigate("NewDeck")}
      />
    )
  });

  state = {
    refreshing: true
  }

  componentDidMount() {
    this.props.getAll();
  }

  onRefresh = () => {
    if (this.state.refreshing) {
      this.setState({ refreshing: false });
    }

    this.props.getAll();
  }

  render() {
    const { decks, loading, error } = this.props.decks;
    const array = Object.values(decks);
    const { refreshing } = this.state;

    return (
      <View style={styles.container}>
        {(loading && refreshing) &&  (
          <ActivityIndicator
            style={{ marginTop: 20 }}
            size="large"
            animating={loading}
            color="#479484"
          />
        )}

        <FlatList
          data={array}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => (
            <CardDeck
              title={item.title}
              cards={item.questions ? item.questions.length : 0}
              onPress={() => this.props.navigation.navigate("Details", item)}
            />
          )}
          refreshing={loading}
          onRefresh={this.onRefresh}
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
  }
});

const mapStateToProps = state => ({
  decks: state.decks
});

const mapDispatchToProps = dispatch => ({
  getAll: () => dispatch(DecksAction.requestDecks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
