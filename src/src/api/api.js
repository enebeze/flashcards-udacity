import database from "../database";

const refDeck = database.ref("decks");

export const getAll = () => {
  return refDeck.once("value");
}

export const addDeck = title => {
  return refDeck.child(title).set({ title });
}

export const addCard = (title, card) => {
  const key = refDeck.child(title).child("questions").push().key;
  refDeck.child(title).child(`questions/${key}`).set(card);
  return key;
}