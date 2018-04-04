import database from "../database";

const refDeck = database.ref("decks")

export const getAll = () => {
  return refDeck.once("value");
}

export const add = title => {
  return refDeck.child(title).set({ title });
}