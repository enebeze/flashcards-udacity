import { combineReducers } from "redux";
import configureStore from "./configureStore";
import rootSaga from "store/sagas";

/* Reducers */
 import { reducer as decks } from "store/ducks/decks";

export default () => {
  // Combine reducers
  const rootReducer = combineReducers({ 
    decks
  });
  // Return configure store with reducers and sagas
  return configureStore(rootReducer, rootSaga);
};
