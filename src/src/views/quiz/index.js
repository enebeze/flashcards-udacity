import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import CardDeck from "../../components/card-deck";
import Button from "../../components/button";
import ButtonHeader from "../../components/button-header";

import { connect } from "react-redux";
import Card from "../../components/card";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Quiz",
      headerLeft: (
        <ButtonHeader
          iconName="ios-arrow-back"
          left
          onPress={() => navigation.goBack(null)}
        />
      )
    };
  };

  state = {
    numberCard: 1,

    showAnswer: false,
  }

  componentDidMount() {
    const { card } = this.props;
    console.log(Object.values(card.questions))
    console.log(card);
  }

  showAnswerClick = () => {
    const showAnswer = !this.state.showAnswer;
    this.setState({ showAnswer });
  }

  btnAnswerClick = isCorrect => {

    var { numberCard } = this.state;

    numberCard++;

    this.setState({ numberCard });

  }


  render() {
    const { card } = this.props;
    const { numberCard, showAnswer } = this.state;
    const questions = Object.values(card.questions);
    const question = questions[numberCard - 1];

    const text = showAnswer ? question.answer : question.question;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#dde0e4" }}>
        <View>
          <Card style={{ paddingVertical: 20, backgroundColor: "#fff" }} >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  borderWidth: 2,
                  borderRadius: 18,
                  padding: 8,
                  fontWeight: "900",
                  borderColor: "#b5a1bd",
                  color: "#8846a7"
                }}
              >
                {card.title}
              </Text>

              <Text style={{ fontWeight: "900", color: "#8846a7", padding: 8 }}>
                {`${numberCard}/${card.cardCount}`}
              </Text>
            </View>

            <Text
              style={{
                marginBottom: 40,
                marginTop: 30,
                fontSize: 30,
                textAlign: "center",
                fontWeight: "900",
                color: "#2d3c47"
              }}
            >
              {text}
            </Text>

            <TouchableOpacity onPress={this.showAnswerClick} >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "900",
                color: "red",
                fontSize: 18
              }}
            >
              Show Answer
            </Text>
            </TouchableOpacity>
          </Card>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 8,
            paddingTop: 20
          }}
        >
        
          <Button color="#39d687" marginRight colorText="#fff" text="Correct" onPress={this.btnAnswerClick} />
          <Button color="#e14e60" marginLeft colorText="#fff" text="Incorret" onPress={this.btnAnswerClick} />
          {/* <TouchableOpacity onPress={this.btnAnswerClick}
            style={{
              flex: 1,
              paddingVertical: 40,
              backgroundColor: "#39d687",
              alignItems: "center",
              marginRight: 8,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontWeight: "900", fontSize: 20, color: "#fff" }} >Correct</Text>
          </TouchableOpacity> */}

          {/* <TouchableOpacity onPress={this.btnAnswerClick}
            style={{
              flex: 1,
              paddingVertical: 40,
              backgroundColor: "#e14e60",
              alignItems: "center",
              marginLeft: 8,
              borderRadius: 5
            }}
          >
            <Text style={{ fontWeight: "900", fontSize: 20, color: "#fff" }}>Incorret</Text>
          </TouchableOpacity> */}

          {/* <Button color="green" text="Correct" onPress={() => {}} />
          <Button color="red" text="Incorret" onPress={() => {}} /> */}
        </View>
        </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  card: state.decks.deckSelected
});

export default connect(mapStateToProps)(Quiz);
