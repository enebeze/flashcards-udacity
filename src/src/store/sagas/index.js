import { takeLatest, all } from "redux-saga/effects";

/* Types */
import { Types as DecksTypes } from "store/ducks/decks";

/* Sagas */
import * as SagasDecks from "./decks";

export default function* root() {
  yield all([
    /* Decks */
    takeLatest(DecksTypes.REQUEST_DECKS, SagasDecks.requestDecks),
    takeLatest(DecksTypes.ADD_DECK, SagasDecks.addDeck),
    takeLatest(DecksTypes.UPDATE_DECK, SagasDecks.updateDeck),
    takeLatest(DecksTypes.DELETE_DECK, SagasDecks.deleteDeck),
    takeLatest(DecksTypes.ADD_CARD, SagasDecks.addCard)
  ]);
}
