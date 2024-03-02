// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIrXYRapLNctIzE10npgrI9Lq4lExiknk",
  authDomain: "netflixgpt-5520c.firebaseapp.com",
  projectId: "netflixgpt-5520c",
  storageBucket: "netflixgpt-5520c.appspot.com",
  messagingSenderId: "731860925297",
  appId: "1:731860925297:web:a27dcb461d6be3f22814d0",
  measurementId: "G-29J06V95QY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
