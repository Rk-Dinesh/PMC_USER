// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDoLMENijyBPO8k8Uf_AlOcB6YkwvwcqT8",
    authDomain: "opt-project-a4542.firebaseapp.com",
    projectId: "opt-project-a4542",
    storageBucket: "opt-project-a4542.firebasestorage.app",
    messagingSenderId: "999845433195",
    appId: "1:999845433195:web:e9c188ce967d54924f462e",
    measurementId: "G-NBSWTTWTK1"
  };  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);