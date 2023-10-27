// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0eFUcYClekQ41UEl2mr7fYGbVLeQZ2t8",
  authDomain: "assignment-tracker-d7f93.firebaseapp.com",
  projectId: "assignment-tracker-d7f93",
  storageBucket: "assignment-tracker-d7f93.appspot.com",
  messagingSenderId: "947431464658",
  appId: "1:947431464658:web:f96599643164ea5dfdd70b",
  measurementId: "G-P8VDM6BZFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);