import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBcna2rDODD99tbFh2ECYfR2Ybf1g6tIw",
  authDomain: "todo-app-firebase-e6830.firebaseapp.com",
  databaseURL: "https://todo-app-firebase-e6830.firebaseio.com",
  projectId: "todo-app-firebase-e6830",
  storageBucket: "todo-app-firebase-e6830.appspot.com",
  messagingSenderId: "648528327977",
  appId: "1:648528327977:web:a761a5d449cbcd526af338",
  measurementId: "G-CFQVBPF1E9"
})

const db = firebaseApp.firestore();

export default db;