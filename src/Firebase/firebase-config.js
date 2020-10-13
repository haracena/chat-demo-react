import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBWFVPsLkWEs1gC16ZfXfuaGP9ZCpAEjLc",
  authDomain: "chat-demo-26bf8.firebaseapp.com",
  databaseURL: "https://chat-demo-26bf8.firebaseio.com",
  projectId: "chat-demo-26bf8",
  storageBucket: "chat-demo-26bf8.appspot.com",
  messagingSenderId: "170732009958",
  appId: "1:170732009958:web:a96f0ed5291efa72ecfe27"
};

firebase.initializeApp(firebaseConfig);

export const myFirebase = firebase;
export const myFirestore = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp();
export const myStorage = firebase.storage();