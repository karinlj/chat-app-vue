import firebase from "firebase/app";
/* eslint-disable no-unused-vars */
import firestore from "firebase/firestore";
/* eslint-enable no-unused-vars */

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyALx0kUbmMRZhOVRc8HQ-x_N3IqG3NzPx0",
  authDomain: "ninja-chat-71e90.firebaseapp.com",
  databaseURL: "https://ninja-chat-71e90.firebaseio.com",
  projectId: "ninja-chat-71e90",
  storageBucket: "ninja-chat-71e90.appspot.com",
  messagingSenderId: "824227439605",
  appId: "1:824227439605:web:6acb83bb629a976d4d76bc",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

//lade till extra
//firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
