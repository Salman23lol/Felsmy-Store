// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl8WBpQLRJVahNYeDwrEsxU5oOBZm2GJM",
  authDomain: "moistly.firebaseapp.com",
  projectId: "moistly",
  storageBucket: "moistly.appspot.com",
  messagingSenderId: "1014390505177",
  appId: "1:1014390505177:web:65faafda72faec488908c8",
  measurementId: "G-PNK4YQJ1QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) ;
export const MoviesRef = collection(db, "Movies")