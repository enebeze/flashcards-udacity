import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import CardDeck from "../../components/card-deck";
import Button from "../../components/button";
import ButtonHeader from "../../components/button-header";
import Card from "../../components/card";

import Result from "./components/result";
import Notification from "./components/notification";
import styles from "./styles";

import { connect } from "react-redux";

const INITIAL_STATE = {
  cardNumber: 1,
  cardCount: 0,
  correct: 0,
  incorrect: 0,
  showAnswer: false,
  finished: false,
}

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

  state = INITIAL_STATE;

  componentDidMount() {
    const cardCount = Object.keys(this.props.deck.questions || {}).length;
    this.setState({ cardCount });
  }

  showAnswerClick = () => {
    const showAnswer = !this.state.showAnswer;
    this.setState({ showAnswer });
  }

  btnAnswerClick = isCorrect => {

    var { cardNumber, correct, incorrect, cardCount } = this.state;

    if (isCorrect) 
      correct++
    else 
      incorrect++

    if (cardCount === cardNumber) {
      this.setState({ finished: true, correct, incorrect, showAnswer: false});
    } else {
      cardNumber++;
    
      this.setState({ cardNumber, correct, incorrect, showAnswer: false });  
    }
  }

  restartQuiz = () => {
    const { cardCount } = this.state;
    this.setState({ ...INITIAL_STATE, cardCount });
  }


  render() {
    const { deck } = this.props;
    const { cardCount, cardNumber, showAnswer, finished, correct, incorrect } = this.state;
    const accuracy = `${((correct * 100) / cardCount).toFixed(2)}%`;
    const questions = Object.values(deck.questions);
    const question = questions[cardNumber - 1];

    const textAnswerOrQuestion = showAnswer ? question.answer : question.question;

    return (
      !finished ? (
        <ScrollView style={{ flex: 1, backgroundColor: "#dde0e4" }}>
          <Card style={{ paddingVertical: 20, backgroundColor: "#fff" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
              <Text style={styles.labelDeckTitle}>
                {deck.title}
              </Text>

              <Text style={styles.labelCount}>
                {`${cardNumber}/${cardCount}`}
              </Text>
            </View>

            <Text style={styles.labelTextAnswerOrQuestion}>
              {textAnswerOrQuestion}
            </Text>

            <TouchableOpacity onPress={this.showAnswerClick}>
              <Text style={styles.textBtnShowAnswerOrQuestion}>
                {showAnswer ? "Show Question" : "Show Answer" }
              </Text>
            </TouchableOpacity>
          </Card>
        
          {showAnswer && (
              <View style={styles.containerButtons}>
                <Button size="big" color="#39d687" marginRight colorText="#fff" text="Correct" onPress={() => this.btnAnswerClick(true) } />
                <Button size="big" color="#e14e60" marginLeft colorText="#fff" text="Incorret" onPress={() => this.btnAnswerClick(false) } />
              </View> 
          )}
        </ScrollView>
      ) : (
        <View>
          <Notification success={correct === cardCount} />
          <Result correct={correct} incorrect={incorrect} accuracy={accuracy} />
            <View style={styles.containerButtons}>
              <Button text="RESTART QUIZ" onPress={this.restartQuiz} />
              <Button color="#9642a8" colorText="#fff" marginLeft text="BACK TO DECK" onPress={() => { this.props.navigation.goBack() }} />
            </View>
        </View>
      )
    );
  }
}

const mapStateToProps = state => ({
  deck: state.decks.decks[state.decks.deckKeySelected]
});

export default connect(mapStateToProps)(Quiz);
