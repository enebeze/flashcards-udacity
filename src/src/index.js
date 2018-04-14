import React, { Component } from "react";
import Router from "route";

/* notification */
import { setLocalNotification } from "./helpers/notification";

/* redux */
import { Provider } from "react-redux";
import createStore from "./store";


const store = createStore();

class App extends Component {

  componentDidMount() {
    /* remember to practice all days */
    setLocalNotification();
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