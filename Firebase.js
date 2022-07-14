// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-PttqpVfYIafQZ-rERQkK4WoSps9AlGk",
  authDomain: "team-404-js-project.firebaseapp.com",
  databaseURL: "https://team-404-js-project-default-rtdb.firebaseio.com",
  projectId: "team-404-js-project",
  storageBucket: "team-404-js-project.appspot.com",
  messagingSenderId: "769973768801",
  appId: "1:769973768801:web:c40da4668e2309ab965020"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const db = getFirestore(app);