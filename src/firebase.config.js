// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCf5h4PKgqxq5pLaenXyGdcIzoflJOIPE4",
    authDomain: "pickmycourse-8cc02.firebaseapp.com",
    projectId: "pickmycourse-8cc02",
    storageBucket: "pickmycourse-8cc02.firebasestorage.app",
    messagingSenderId: "111042309336",
    appId: "1:111042309336:web:16802b60ac731e9339fbad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);