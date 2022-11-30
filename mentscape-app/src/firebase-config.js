// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBksQxs5cgNeyz1FZDRHUVSl55kmwfn7Q4",
    authDomain: "mentscape-25fdd.firebaseapp.com",
    projectId: "mentscape-25fdd",
    storageBucket: "mentscape-25fdd.appspot.com",
    messagingSenderId: "337503667777",
    appId: "1:337503667777:web:88d0c63ee31353a88e28c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);