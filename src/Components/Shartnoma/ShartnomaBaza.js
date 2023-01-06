// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnMtI_bFLvwsYWErJftYnUICFMdqW2nU0",
    authDomain: "shartnoma-e120e.firebaseapp.com",
    databaseURL: "https://shartnoma-e120e-default-rtdb.firebaseio.com",
    projectId: "shartnoma-e120e",
    storageBucket: "shartnoma-e120e.appspot.com",
    messagingSenderId: "934328410542",
    appId: "1:934328410542:web:fa481e55eccf3ec997683f",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default getFirestore();
