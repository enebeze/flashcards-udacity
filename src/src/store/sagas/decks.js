import * as api from "../../api/api";

import { call, put } from "redux-saga/effects";
import DecksActions from "store/ducks/decks";

export function* requestDecks() {
  try {
    // Access api
    const response = yield call(api.getAll);
    yield put(DecksActions.requestDecksSuccess(response.val()));
  } catch (error) {
    yield put(DecksActions.failed(error));
  }
}

export function* addDeck(action) {
  try {
    const key = yield call(api.addDeck, action.title);
    yield put(DecksActions.addDeckSuccess(key, action.title));
  } catch (error) {
    yield put(DecksActions.failed(error));
  }
}

export function* updateDeck(action) {
  const { key, title } = action.deck;
  try {
    yield call(api.updateDeck, key, title);
    yield put(DecksActions.updateDeckSuccess(action.deck)); 
  } catch (error) {
    yield put(DecksActions.failed(error));
  }
}

export function* deleteDeck(action) {
  try {
    yield call(api.deleteDeck, action.key);
    yield put(DecksActions.deleteDeckSuccess(action.key));
  } catch (error) {
    yield put(DecksActions.failed(error));
  }
}

/* CARDS */

export function* saveCard(action) {
  try {
    if (action.card.key) {
      yield call(api.updateCard, action.deckKey, action.card);
    } else {
      action.card.key = yield call(api.addCard, action.deckKey, action.card);
    }

    yield put(DecksActions.saveCardSuccess(action.deckKey, action.card));
  } catch (error) {
    yield put(DecksActions.failed(error));
  }
}

export function* deleteCard(action) {
  try {
    yield call(api.deleteCard, action.deckKey, action.cardKey);
    yield put(DecksActions.deleteCardSuccess(action.deckKey, action.cardKey));
  } catch(error) {
    yield put(DecksActions.failed(error));
  }
}
