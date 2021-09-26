import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0IUVHY-W8a_hPA7Cak7jD6fE1sXJfaqE",
  authDomain: "facebook-clone-54f4d.firebaseapp.com",
  projectId: "facebook-clone-54f4d",
  storageBucket: "facebook-clone-54f4d.appspot.com",
  messagingSenderId: "765058472534",
  appId: "1:765058472534:web:36171c4bec1434330379f7",
  measurementId: "G-E15WPNES1P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
