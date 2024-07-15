// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOK2H7XklP-_ng407mj___hy3Fy9InNtk",
    authDomain: "bettercord-e4e7d.firebaseapp.com",
    projectId: "bettercord-e4e7d",
    storageBucket: "bettercord-e4e7d.appspot.com",
    messagingSenderId: "934430756781",
    appId: "1:934430756781:web:faedd45b79251803721b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
