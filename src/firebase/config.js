// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBip2P42ibHeDfuFOOu-zOVjcawMEfNaMg",
  authDomain: "simple-app2-70800.firebaseapp.com",
  projectId: "simple-app2-70800",
  storageBucket: "simple-app2-70800.appspot.com",
  messagingSenderId: "566012883087",
  appId: "1:566012883087:web:0ef4b8ffb043fe2a1ec0fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);