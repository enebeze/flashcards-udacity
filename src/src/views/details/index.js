import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Details extends Component {
  
  static navigationOptions = ({ navigation }) => {
    const { state: { params } } = navigation;

    return {
      title: params.title
    };
  };

  componentDidMount() {
    
  }

  render() {

    const { state: { params } } = this.props.navigation;
    const { title, questions } = params;
    return (
      <View>
        <View>
          <Text>{title}</Text>
          <Text>{`${questions ? questions.length : 0} cards`}</Text>
        </View>
        
        <View>
          <TouchableOpacity>
            <Text>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Details;
