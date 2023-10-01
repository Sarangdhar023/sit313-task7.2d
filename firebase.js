// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import { getStorage } from 'firebase/storage';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3C6bCUxnAcZptAXAs_5LmaDrl-IcOuWg",
  authDomain: "sarang-f226c.firebaseapp.com",
  projectId: "sarang-f226c",
  storageBucket: "sarang-f226c.appspot.com",
  messagingSenderId: "753167879840",
  appId: "1:753167879840:web:2f678bc57362edf92283c5",
  measurementId: "G-JMHQTJ8W52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);