// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAC_kjgxQRdqnmt3V_sCDEK2yNh0YcXqY0",
  authDomain: "shopping-reactnative-467dd.firebaseapp.com",
  projectId: "shopping-reactnative-467dd",
  storageBucket: "shopping-reactnative-467dd.appspot.com",
  messagingSenderId: "995070998575",
  appId: "1:995070998575:web:a9e9e3562e85ac7d78aeda",
  measurementId: "G-42MT79624F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);