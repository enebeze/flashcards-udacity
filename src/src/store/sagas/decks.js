import * as api from "../../api/api";

import { call, put } from "redux-saga/effects";
import DecksActions from "store/ducks/decks";

export function* requestDecks() {
  try {
    // Access api
    const response = yield call(api.getAll);
    yield put(DecksActions.requestDecksSuccess(response.val()));
  } catch (error) {
    yield put(DecksActions.requestDecksFailed(error));
  }
}

export function* addDeck(action) {
  try {
    yield call(api.addDeck, action.title);
    yield put(DecksActions.addDeckSuccess(action.title));
  } catch (error) {
    yield put(DecksActions.addDeckFailed(error));
  }
}

export function* addCard(action) {
  try {
    const response = yield call(api.addCard, action.title, action.card);
    yield put(DecksActions.addCardSuccess(action.title, action.card, response));
  } catch (error) {
    yield put(DecksActions.addCardFailed(error));
  }
}
