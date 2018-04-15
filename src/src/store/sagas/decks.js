import * as api from "api/api";

import { call, put } from "redux-saga/effects";
import DecksActions from "store/ducks/decks";

export function* requestDecks() {
  try {
    const response = yield call(api.getAll);
    yield put(DecksActions.requestDecksSuccess(response.val()));
  } catch (error) {
    yield put(DecksActions.failed(error));
  }
}

export function* saveDeck(action) {
  try {
    if (action.deck.key) {
      yield call(api.updateDeck, action.deck)
    } else {
      action.deck.key = yield call(api.addDeck, action.deck);
    }
    
    yield put(DecksActions.saveDeckSuccess(action.deck));
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
