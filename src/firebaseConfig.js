import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxCAwW2guu8cnn05GQH2TMW0QVlbBA_gI",
  authDomain: "outdoor-marketplace.firebaseapp.com",
  projectId: "outdoor-marketplace",
  storageBucket: "outdoor-marketplace.appspot.com",
  messagingSenderId: "1045644007911",
  appId: "1:1045644007911:web:a1884d01bb5083bfc58542",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
