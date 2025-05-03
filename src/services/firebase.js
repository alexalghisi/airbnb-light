// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD8ZrPmpND71h-uT1cN06mVJRfNwBEfSQw",
    authDomain: "light-airbnb.firebaseapp.com",
    projectId: "light-airbnb",
    storageBucket: "light-airbnb.firebasestorage.app",
    messagingSenderId: "375847565466",
    appId: "1:375847565466:web:4897d2d0aa3bcdd7714723"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);