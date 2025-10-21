// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   
const firebaseConfig = {
  apiKey: "AIzaSyCEgqYQ6-3EGA2lR1pbc4ypGDabfJBboLs",
  authDomain: "login-signup-eaf6a.firebaseapp.com",
  projectId: "login-signup-eaf6a",
  storageBucket: "login-signup-eaf6a.firebasestorage.app",
  messagingSenderId: "1106476289",
  appId: "1:1106476289:web:dca76836a3ab3b7eb92f00",
  measurementId: "G-MYMSKPVEQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);