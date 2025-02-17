// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApUbvyLMJ5T-8CdBJ2jcDVWiHcfLv48RQ",
  authDomain: "react-firebase-auth-2025-e5d3a.firebaseapp.com",
  projectId: "react-firebase-auth-2025-e5d3a",
  storageBucket: "react-firebase-auth-2025-e5d3a.firebasestorage.app",
  messagingSenderId: "749783441694",
  appId: "1:749783441694:web:fd9ee2690c8bce19d1290f",
  measurementId: "G-46P0YXS28D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export default auth;