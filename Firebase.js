// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAqK75RCDonwyym9njzmFrnVxiNkGHO4yA",
  authDomain: "react-college-5a37d.firebaseapp.com",
  projectId: "react-college-5a37d",
  storageBucket: "react-college-5a37d.appspot.com",
  messagingSenderId: "516343036707",
  appId: "1:516343036707:web:5fbfa1442e88bd0f832a96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth();