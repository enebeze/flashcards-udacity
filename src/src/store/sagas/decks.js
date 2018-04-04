import * as api from "../../api/decks";

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
    yield call(api.add, action.title);
    yield put(DecksActions.addSuccess(action.title));
  } catch (error) {
    yield put(DecksActions.addFailed(error));
  }
}
