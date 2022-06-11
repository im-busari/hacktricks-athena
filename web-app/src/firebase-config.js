// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjQiXInrktBchn-eW7Ubb1O9qaqcJw8H8",
  authDomain: "hacktrick-athena.firebaseapp.com",
  projectId: "hacktrick-athena",
  storageBucket: "hacktrick-athena.appspot.com",
  messagingSenderId: "789681263188",
  appId: "1:789681263188:web:0b0fb16a82e80062a753c1",
  measurementId: "G-8JLTZF4FXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
