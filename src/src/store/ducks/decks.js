import { createActions, createReducer } from "reduxsauce";
import { Map } from "immutable";

/* Types & Creators */

const { Types, Creators } = createActions({
  requestDecks: null,
  requestDecksSuccess: ["decks"],

  saveDeck: ["deck"],
  saveDeckSuccess: ["deck"],

  deleteDeck: ["key"],
  deleteDeckSuccess: ["key"],

  saveCard: ["deckKey", "card"],
  saveCardSuccess: ["deckKey", "card"],

  deleteCard: ["deckKey", "cardKey"],
  deleteCardSuccess: ["deckKey", "cardKey"],

  failed: ["error"],

  selectedDeck: ["key"]
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  decks: {},
  loading: false,
  error: null,
  success: false,
  deckKeySelected: null
};

/* Reducers */

export const request = (state, action) => ({
  ...state,
  loading: true,
  error: null
});

export const requestSuccess = (state, action) => ({
  ...state,
  decks: action.decks,
  loading: false,
  error: null
});

export const saveDeck = state => ({
  ...state,
  loading: true,
  error: null,
  success: false
});

export const saveDeckSuccess = (state, { deck }) => ({
  ...state,
  loading: false,
  error: null,
  decks: {
    ...state.decks,
    [deck.key]: state.decks[deck.key]
      ? { ...state.decks[deck.key], title: deck.title }
      : { key: deck.key, title: deck.title }
  },
  deckKeySelected: deck.key,
  success: true
});

export const deleteDeck = (state, action) => ({
  ...state,
  loading: true,
  error: null,
  success: false
});

export const deleteDeckSuccess = (state, action) => {
  const { decks } = state;
  // remove deck
  delete decks[action.key];
  return {
    ...state,
    loading: false,
    error: false,
    success: true,
    decks
  };
};

/* CARD */

export const saveCard = state => ({
  ...state,
  loading: true,
  error: null,
  success: false
});

export const saveCardSuccess = (state, action) => {
  const { decks } = state;
  return {
    ...state,
    loading: false,
    error: null,
    decks: {
      ...decks,
      [action.deckKey]: {
        ...decks[action.deckKey],
        questions: {
          ...decks[action.deckKey]["questions"],
          [action.card.key]: action.card
        }
      }
    },
    success: true
  };
};

export const deleteCard = state => ({
  ...state,
  loading: true,
  error: null,
  success: false
});

export const deleteCardSuccess = (state, action) => {
  const { decks } = state;
  // remove deck
  delete decks[action.deckKey]["questions"][action.cardKey];

  return {
    ...state,
    loading: false,
    error: null,
    success: true,
    decks
  };
};

export const selectedDeck = (state, action) => ({
  ...state,
  deckKeySelected: action.key
});

export const failed = (state, action) => ({
  ...state,
  loading: false,
  error: action.error
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_DECKS]: request,
  [Types.REQUEST_DECKS_SUCCESS]: requestSuccess,

  [Types.SAVE_DECK]: saveDeck,
  [Types.SAVE_DECK_SUCCESS]: saveDeckSuccess,

  [Types.DELETE_DECK]: deleteDeck,
  [Types.DELETE_DECK_SUCCESS]: deleteDeckSuccess,

  [Types.SAVE_CARD]: saveCard,
  [Types.SAVE_CARD_SUCCESS]: saveCardSuccess,

  [Types.DELETE_CARD]: deleteCard,
  [Types.DELETE_CARD_SUCCESS]: deleteCardSuccess,

  [Types.SELECTED_DECK]: selectedDeck,

  [Types.FAILED]: failed
});
