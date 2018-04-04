import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";

import { Ionicons } from "@expo/vector-icons";

import Home from "views/home";
import About from "views/about";
import Details from "../views/details";
import NewDeck from "../views/new-deck";

const HomeNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Details: { screen: Details },
    NewDeck: { screen: NewDeck }
  },
  {
    //headerMode: "none",
  }
);

export default TabNavigator(
  {
    Home: { 
        screen: HomeNavigator,
        navigationOptions: {
            title: "Decks",
            tabBarLabel: "Decks",
            //headerBackTitle: "Decks",
            tabBarIcon: ({ tintColor }) =>  <Ionicons size={30} name="ios-home" style={{ color: tintColor }} />
          }    
        
    },
    About: { screen: About }
  },
//   {
//     tabBarOptions: {
//       activeTintColor: "#479484",
//       inactiveTintColor: "gray"
//     }
//   }
);
