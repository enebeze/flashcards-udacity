import React, { Component } from "react";
import Router from "route";

/* notification */
import { setLocalNotification, listenerNotification } from "./helpers/notification";

/* redux */
import { Provider } from "react-redux";
import createStore from "./store";


const store = createStore();

class App extends Component {

  componentDidMount() {
    /* notification for remember to practice all days */
    setLocalNotification();
    
    this.listener = listenerNotification(notification => {
      alert("Thanks for your return.");
      console.log("notification recive", notification);
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;