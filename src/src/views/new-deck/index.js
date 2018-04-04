import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

import DropdownAlert from "react-native-dropdownalert";

import DecksAction from "store/ducks/decks";
import { connect } from "react-redux";

class NewDeck extends Component {
  static navigationOptions = {
    title: "New Deck"
  };

  state = {
    title: ""
  };

  componentWillReceiveProps(nextProps) {
    const { added, error } = nextProps.decksState;
    if (added) {
      this.dropdown.alertWithType("success", "Success", "New deck added successfully.");
      this.setState({ title: "" });
    } 
    if (error) {
        this.dropdown.alertWithType("error", "Error", error.toString());
    }
  }

  addDeck = () => {
    Keyboard.dismiss();
    this.props.addDeck(this.state.title);
  };

  render() {
    const { title } = this.state;
    const { loading, error } = this.props.decksState;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 42,
              fontWeight: "bold",
              textAlign: "center",
              marginHorizontal: 20,
              marginTop: 40
            }}
          >
            What is the title of your new deck?
          </Text>
          <TextInput
            placeholder="Name here"
            value={title}
            onChangeText={title => this.setState({ title })}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "gray",
              width: "90%",
              marginVertical: 30,
              fontSize: 20
            }}
          />

          <TouchableOpacity
            onPress={this.addDeck}
            style={{
              width: "30%",
              backgroundColor: "green",
              alignItems: "center",
              paddingVertical: 12,
              borderRadius: 5,
              marginTop: 16
            }}
          >
            {loading && (
              <ActivityIndicator
                size="small"
                animating={loading}
                color="#479484"
              />
            )}

            {!loading && <Text style={{ color: "#fff" }}>Save</Text>}
          </TouchableOpacity>

          <DropdownAlert ref={ref => (this.dropdown = ref)} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  decksState: state.decks
});

const mapDispatchToProps = dispatch => ({
  addDeck: title => dispatch(DecksAction.add(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
    //justifyContent: "center"
  },
  title: {
    fontSize: 32
  }
});
