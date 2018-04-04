import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default class About extends React.Component {
  
  static navigationOptions = {
    title: "About",
    headerBackTitle: "Teste",
    tabBarIcon: ({ tintColor }) => {
      return <Ionicons size={32} name="ios-information-circle-outline" style={{ color: tintColor }} />;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>About</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
