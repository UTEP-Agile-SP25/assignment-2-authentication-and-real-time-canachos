// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpujk3hWes_9yVP1OVt6ibf91UXiUe950",
  authDomain: "daniel-camacho-sandox.firebaseapp.com",
  projectId: "daniel-camacho-sandox",
  storageBucket: "daniel-camacho-sandox.firebasestorage.app",
  messagingSenderId: "970946616178",
  appId: "1:970946616178:web:d0ce1e52859cf561921beb",
  measurementId: "G-9XKQRZJ91Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
