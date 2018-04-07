import React from "react";
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from "react-navigation";

import { Ionicons } from "@expo/vector-icons";

import Home from "views/home";
import About from "views/about";
import Details from "../views/details";
import NewDeck from "../views/new-deck";
import NewCard from "../views/new-card";

const HomeNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Details },
    NewDeck: { screen: NewDeck },
    NewCard: { screen: NewCard }
  },
  {
    headerMode: "none",
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
    tabBarOptions: {
      // activeTintColor: "#479484",
      // inactiveTintColor: "gray"
      activeTintColor: "#47d259",
        inactiveTintColor: "#fff",
        activeBackgroundColor: "#1f9cd4",
        inactiveBackgroundColor: "#1f9cd4",
      style: { 
        backgroundColor: Platform.OS === 'ios' ? '#1f9cd4' : '#0288d1',
      }
    }
  }
);

const RootNavigator = StackNavigator({
  Root: { screen: Tab },
},
{
  navigationOptions: {
    headerStyle: { backgroundColor: "#0288d1"},
    headerTitleStyle: {
      color: "#fff",
  }
  }
})

export default RootNavigator;
