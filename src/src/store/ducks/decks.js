import { createActions, createReducer } from "reduxsauce";

/* Types & Creators */

const { Types, Creators } = createActions({
  requestDecks: null,
  requestDecksSuccess: ["decks"],
  requestDecksFailed: ["error"],

  add: ["title"],
  addSuccess: ["title"],
  addFailed: ["error"]
});

export { Types };
export default Creators;

/* Initial State */
const INITIAL_STATE = {
  decks: { },
  loading: false,
  error: null,
  added: false
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

export const add = state => ({
  ...state,
  loading: true,
  error: null,
  added: false
});

export const addSuccess = (state, action) => ({
  ...state,
  loading: false,
  error: null,
  decks: { ...state.decks, [action.title]: { title: action.title } },
  added: true
});

export const addFailed = (state, action) => ({
  ...state,
  loading: false,
  error: action.error
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_DECKS]: request,
  [Types.REQUEST_DECKS_SUCCESS]: success,
  [Types.REQUEST_DECKS_FAILED]: failed,

  [Types.ADD]: add,
  [Types.ADD_SUCCESS]: addSuccess,
  [Types.ADD_FAILED]: addFailed
});
