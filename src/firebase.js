import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBfhVXdEEKKkjfXusYDuwg7vWZ2JoPu0Xs",
  authDomain: "memo-app-c24db.firebaseapp.com",
  databaseURL: "https://memo-app-c24db.firebaseio.com",
  projectId: "memo-app-c24db",
  storageBucket: "",
  messagingSenderId: "279407503362"
};
export const firebaseApp = firebase.initializeApp(config);
export const firebaseDb = firebaseApp.database().ref("memo/imajo/");
 
