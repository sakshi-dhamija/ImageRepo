// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDmGqp37MUK1hDcQlHTVvP4uz2wU46AJtE",
  authDomain: "cosmic-gizmo-298307.firebaseapp.com",
  projectId: "cosmic-gizmo-298307",
  storageBucket: "cosmic-gizmo-298307.appspot.com",
  messagingSenderId: "33194818513",
  appId: "1:33194818513:web:8fc414e65450e338087ef0",
  measurementId: "G-FL5Y0TTX4H"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };