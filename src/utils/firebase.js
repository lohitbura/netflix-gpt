// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkGSAqq6dg9h7uWLilLrp6YhhW92Tcmkw",
  authDomain: "netflixgpt-a90d4.firebaseapp.com",
  projectId: "netflixgpt-a90d4",
  storageBucket: "netflixgpt-a90d4.appspot.com",
  messagingSenderId: "401483387465",
  appId: "1:401483387465:web:77e01c565184daf2f7a598",
  measurementId: "G-CREHBG7B28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();