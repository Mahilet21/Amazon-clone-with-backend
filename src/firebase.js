// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1p-LKJokynQjtJCV48k7eyCNseIzNyNQ",
  authDomain: "fir-345db.firebaseapp.com",
  projectId: "fir-345db",
  storageBucket: "fir-345db.appspot.com",
  messagingSenderId: "465020712393",
  appId: "1:465020712393:web:60539bbea05c322fdb6418",
  measurementId: "G-KLZ16D165Y"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
