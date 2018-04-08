import React from "react";
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";

import { Ionicons } from "@expo/vector-icons";

import Home from "views/home";
import About from "views/about";
import Details from "views/details";
import NewDeck from "views/new-deck";
import NewCard from "views/new-card";
import Quiz from "views/quiz";

const HomeNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Details },
    NewDeck: { screen: NewDeck },
    NewCard: { screen: NewCard }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const Tab = TabNavigator(
  {
    Home: { 
        screen: HomeNavigator,
        navigationOptions: {
            tabBarLabel: "Decks",
            //headerBackTitle: "Decks",
            tabBarIcon: ({ tintColor }) =>  <Ionicons size={30} name="ios-home" style={{ color: tintColor }} />
          }    
        
    },
    About: { screen: About }
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        activeTintColor: "#633379",
        inactiveTintColor: "#fff",
      style: { 
        backgroundColor: "#8c4ca9",
      },
      labelStyle: {
        fontWeight: "900"
      }
    }
  }
);

const RootNavigator = StackNavigator({
  Root: { screen: Tab },
  Quiz: { screen: Quiz }
},
{
  mode: "modal",
  navigationOptions: {
    headerStyle: { backgroundColor: "#8c4ca9", elevation: null },
    headerTitleStyle: {
      color: "#fff",
  }
  }
})

export default RootNavigator;
