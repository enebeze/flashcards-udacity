import React from "react";
import Router from "route";

import { Provider } from "react-redux";
import createStore from "./store";

const store = createStore();

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
);