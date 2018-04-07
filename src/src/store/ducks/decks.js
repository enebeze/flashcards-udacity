import { createActions, createReducer } from "reduxsauce";
import { Map } from "immutable";

/* Types & Creators */

const { Types, Creators } = createActions({
  requestDecks: null,
  requestDecksSuccess: ["decks"],
  requestDecksFailed: ["error"],

  addDeck: ["title"],  
  addDeckSuccess: ["title"],
  addDeckFailed: ["error"],

  addCard: ["title", "card"],
  addCardSuccess: ["title", "card", "newKey"],
  addCardFailed: ["error"],

  selectedCard: ["card"]

});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  decks: { },
  loading: false,
  error: null,
  added: false,
  cardSelected: null
};

/* Reducers */

export const request = (state, action) => ({ 
    ...state,
    loading: true,
    error: null
});

export const success = (state, action) => ({
    ...state,
    decks: action.decks,
    loading: false,
    error: null
});

export const failed = (state, action) => ({
    ...state,
    loading: false,
    error: action.error
});

export const addDeck = state => ({
  ...state,
  loading: true,
  error: null,
  added: false
});

export const addDeckSuccess = (state, action) => ({
  ...state,
  loading: false,
  error: null,
  decks: { ...state.decks, [action.title]: { title: action.title } },
  added: true
});

export const addDeckFailed = (state, action) => ({
  ...state,
  loading: false,
  error: action.error
});

export const addCard = state => ({
  ...state,
  loading: true,
  error: null,
  added: false
});

export const addCardSuccess = (state, action) => {
  const { decks } = state;
  return ({
    ...state,
    loading: false,
    error: null,
    decks: { ...decks, 
      [action.title]: { ...decks[action.title], 
        "questions": { ...decks[action.title]["questions"], 
        [action.newKey]: action.card } }},
    added: true,
    cardSelected: { ...state.cardSelected, cardCount: state.cardSelected.cardCount + 1 }
  })
};

export const addCardFailed = (state, action) => ({
  ...state,
  loading: false,
  error: action.error
});

export const selectedCard = (state, action) => ({
  ...state,
  cardSelected: action.card
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_DECKS]: request,
  [Types.REQUEST_DECKS_SUCCESS]: success,
  [Types.REQUEST_DECKS_FAILED]: failed,

  [Types.ADD_DECK]: addDeck,
  [Types.ADD_DECK_SUCCESS]: addDeckSuccess,
  [Types.ADD_DECK_FAILED]: addDeckFailed,

  [Types.ADD_CARD]: addCard,
  [Types.ADD_CARD_SUCCESS] : addCardSuccess,
  [Types.ADD_CARD_FAILED]: addCardFailed,

  [Types.SELECTED_CARD]: selectedCard
});
