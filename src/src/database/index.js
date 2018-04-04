import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyAeGzlFMNIcXwA-Risgf_WpCBsZY_3VswM",
  authDomain: "flashcards-udacity.firebaseapp.com",
  databaseURL: "https://flashcards-udacity.firebaseio.com",
  projectId: "flashcards-udacity"
};

firebase.initializeApp(config);

export default firebase.database();