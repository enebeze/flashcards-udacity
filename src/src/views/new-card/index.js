import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
  Platform
} from "react-native";

import DropdownAlert from "react-native-dropdownalert";
import Button from "../../components/button";
import TextInput from "../../components/text-input";
import Card from "../../components/card";

import DecksAction from "store/ducks/decks";
import { connect } from "react-redux";

const INITIAL_STATE = {
  deck: "",
  question: "",
  answer: ""
};

class NewCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "New Card",
    headerLeft: (
      <ButtonHeader
        iconName={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back" }
        left
        onPress={() => navigation.goBack(null)}
      />
    )
  });

  state = INITIAL_STATE;

  componentDidMount() {
    const { state: { params } } = this.props.navigation;
    this.setState({ deck: params });
  }

  componentWillReceiveProps(nextProps) {
    const { added, error } = nextProps.decksState;
    if (added) {
      this.dropdown.alertWithType(
        "success",
        "Success",
        "New card added successfully."
      );
      this.setState(INITIAL_STATE);
    }
    if (error) {
      this.dropdown.alertWithType("error", "Error", error.toString());
    }
  }

  addCard = () => {
    Keyboard.dismiss();

    const { deck, question, answer } = this.state;
    this.props.addCard(deck, { question, answer });
  };

  render() {
    const { title, question, answer } = this.state;
    const { loading, error } = this.props.decksState;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Card style={{ paddingVertical: 16 }}>

           <Text style={{ paddingBottom: 26, fontWeight: "bold", textAlign: "center" }} >{`New Card for ${this.state.deck}`} </Text>

            <TextInput
              title="QUESTION"
              value={question}
              onChangeText={question => this.setState({ question })}
            />
            <TextInput
              title="ANSWER"
              value={answer}
              onChangeText={answer => this.setState({ answer })}
            />

            <Button
              color="green"
              text="Save"
              loading={loading}
              onPress={this.addCard}
            />
          </Card>

          <DropdownAlert updateStatusBar={false} ref={ref => (this.dropdown = ref)}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  decksState: state.decks
});

const mapDispatchToProps = dispatch => ({
  addCard: (title, card) => dispatch(DecksAction.addCard(title, card))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);

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
