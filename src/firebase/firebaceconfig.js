import firebase from 'firebase/app';
import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXs1Xf2YXyQ4ozCGHGqeqdN4TPSR7lB-s",
    authDomain: "olxh-dd1fb.firebaseapp.com",
    projectId: "olxh-dd1fb",
    storageBucket: "olxh-dd1fb.appspot.com",
    messagingSenderId: "484983310675",
    appId: "1:484983310675:web:c10536726b8640a18379a6",
    measurementId: "G-JT4QK00W78"
  };

  const server = firebase.initializeApp(firebaseConfig)
  const auth = server.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}