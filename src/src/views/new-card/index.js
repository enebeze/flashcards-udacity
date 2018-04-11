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
import ButtonHeader from "../../components/button-header";

import DecksAction from "store/ducks/decks";
import { connect } from "react-redux";

const INITIAL_STATE = {
  key: null,
  question: "",
  answer: ""
};

class NewCard extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state: { params }} = navigation;
    return ({
      title: params ? "Edit Card" : "New Card",
      headerLeft: (
        <ButtonHeader
          iconName={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back" }
          left
          onPress={() => navigation.goBack(null)}
        />
      )
    });
  }
    

  state = INITIAL_STATE;

  componentDidMount() {
    const { state: { params }} = this.props.navigation;
    if (params) {
      this.setState({ key: params.key, question: params.question, answer: params.answer });
    }
  }


  componentWillReceiveProps(nextProps) {
    const { success, error } = nextProps.decksState;
    if (success) {
      this.dropdown.alertWithType(
        "success",
        "Success",
        "Card saved successfully."
      );
      this.setState(INITIAL_STATE);
    }
    if (error) {
      this.dropdown.alertWithType("error", "Error", error.toString());
    }
  }

  saveCard = () => {
    Keyboard.dismiss();

    const { question, answer, key } = this.state;
    const { deck } = this.props;

    this.props.saveCard(deck.key, { question, answer, key });
  };

  render() {
    const { question, answer } = this.state;
    const { loading, error } = this.props.decksState;
    const { deck } = this.props;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Card style={{ paddingVertical: 16 }}>

            {/* <Text style={{ paddingBottom: 26, fontWeight: "bold", textAlign: "center" }} >{`New Card for ${deck.title}`} </Text> */}

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
              text="SAVE"
              loading={loading}
              size="small"
              onPress={this.saveCard}
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
  decksState: state.decks,
  deck: state.decks.decks[state.decks.deckKeySelected]
});

const mapDispatchToProps = {
  saveCard: DecksAction.saveCard
};

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
