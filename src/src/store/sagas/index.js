import { takeLatest, all } from "redux-saga/effects";

/* Types */
import { Types as DecksTypes } from "store/ducks/decks";

/* Sagas */
import * as SagasDecks from "./decks";

export default function* root() {
  yield all([
    /* Decks */
    takeLatest(DecksTypes.REQUEST_DECKS, SagasDecks.requestDecks),
    takeLatest(DecksTypes.ADD, SagasDecks.addDeck)
    
  ]);
}
