import database from "../database";

const refDeck = database.ref("decks");

export const getAll = () => {
  return refDeck.once("value");
};

export const addDeck = ({ title }) => {
  const key = refDeck.push().key;
  refDeck.child(key).set({ title, key });
  return key;
};

export const updateDeck = ({ key, title }) => {
  return refDeck.child(`${key}/title`).set(title);
};

export const deleteDeck = key => {
  return refDeck.child(key).remove();
};

/* CARDS */

export const addCard = (deckKey, card) => {
  card.key = refDeck.child(deckKey).child("questions").push().key;
  refDeck.child(deckKey).child(`questions/${card.key}`).set(card);
  return card.key;
};

export const updateCard = (deckKey, card) => {
  return refDeck.child(`${deckKey}/questions/${card.key}`).set(card);
};

export const deleteCard = (deckKey, cardKey) => {
  return refDeck.child(`${deckKey}/questions/${cardKey}`).remove();
};
