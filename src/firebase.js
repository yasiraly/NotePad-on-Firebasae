// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIaBaIpU2Dh3LYQoKO1GbEjPUnq4ysjf8",
    authDomain: "myblogwebsite-5cb41.firebaseapp.com",
    projectId: "myblogwebsite-5cb41",
    storageBucket: "myblogwebsite-5cb41.appspot.com",
    messagingSenderId: "1061159522543",
    appId: "1:1061159522543:web:80894e1c763b9a394ecb1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()