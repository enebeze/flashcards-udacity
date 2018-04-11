import React from "react";
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";

import { Ionicons } from "@expo/vector-icons";
import colors from "../styles/colors";

/* Views */
import Home from "views/home";
import About from "views/about";
import Details from "views/details";
import NewDeck from "views/new-deck";
import NewCard from "views/new-card";
import Quiz from "views/quiz";
import Cards from "views/cards";

/* Stack Home Navigator */
const HomeNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Details },
    NewDeck: { screen: NewDeck },
    NewCard: { screen: NewCard },
    Cards: { screen: Cards }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

/* Tab Navigator */
const Tab = TabNavigator(
  {
    Home: { 
        screen: HomeNavigator,
        navigationOptions: {
            tabBarLabel: "Decks",
            tabBarIcon: ({ tintColor }) =>  <Ionicons size={30} name="ios-home" style={{ color: tintColor }} />
          }    
        
    },
    About: { screen: About }
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        activeTintColor: colors.primaryTextColor,
        inactiveTintColor: colors.secondaryLightColor,
      style: { 
        backgroundColor: colors.secondaryTextColor,
      },
      labelStyle: {
        fontWeight: "900"
      }
    }
  }
);

/* Stack Root Navigator */
const RootNavigator = StackNavigator({
  Root: { screen: Tab },
  Quiz: { screen: Quiz }
},
{
  mode: "modal",
  navigationOptions: {
    headerStyle: { backgroundColor: colors.primaryColor, elevation: null },
    headerTitleStyle: {
      color: colors.secondaryLightColor,
  }
  }
})

export default RootNavigator;
