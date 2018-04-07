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
import Card from "../../components/card";
import TextInput from "../../components/text-input";

import DecksAction from "store/ducks/decks";
import { connect } from "react-redux";

class NewDeck extends Component {
  static navigationOptions = ({navigation}) => ({
    title: "New Deck",
    headerLeft: (
      <ButtonHeader
        iconName={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back" }
        left
        onPress={() => navigation.goBack(null)}
      />
    )
  });

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


        <Card style={{ paddingVertical: 16 }}>
            <TextInput 
              title="WHAT IS THE TITLE OF YOUR NEW DECK?" 
              value={title}
              onChangeText={title => this.setState({ title })}
            />

            <Button color="green" text="Save" loading={loading} onPress={this.addDeck} />
          </Card>
            

          <DropdownAlert updateStatusBar={false} ref={ref => (this.dropdown = ref)} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  decksState: state.decks
});

const mapDispatchToProps = dispatch => ({
  addDeck: title => dispatch(DecksAction.addDeck(title))
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
