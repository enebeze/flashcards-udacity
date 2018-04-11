import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
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
import ButtonHeader from "../../components/button-header";

import DecksAction from "store/ducks/decks";
import { connect } from "react-redux";

class NewDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { state: { params }} = navigation;
    return {
      title: params ? "Edit Deck" : "New Deck",
      headerLeft: (
        <ButtonHeader
          iconName={Platform.OS === "ios" ? "ios-arrow-back" : "md-arrow-back"}
          left
          onPress={() => navigation.goBack(null)}
        />
      )
    };
  };

  state = {
    title: "",
    key: null
  };

  componentDidMount() {
    const { state: { params }} = this.props.navigation;
    if (params) {
      this.setState({ title: params.title, key: params.key });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { success, error } = nextProps.decksState;
    if (success) {
      
      const resetAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' }),
          NavigationActions.navigate({ routeName: 'Details', params: this.state.title })
        ],
      });
      
      this.props.navigation.dispatch(resetAction);

    }
    if (error) {
      this.dropdown.alertWithType("error", "Error", error.toString());
    }
  }

  addDeck = () => {
    Keyboard.dismiss();
    const { title, key } = this.state;

    if (key) {
      this.props.updateDeck({ title, key });
    }
    else {
      this.props.addDeck(title);
    }
    
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

            <Button
              text="SAVE"
              loading={loading}
              size="small"
              onPress={this.addDeck}
            />
          </Card>

          <DropdownAlert
            updateStatusBar={false}
            ref={ref => (this.dropdown = ref)}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  decksState: state.decks
});

const mapDispatchToProps = {
  addDeck: DecksAction.addDeck,
  updateDeck: DecksAction.updateDeck
};

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
