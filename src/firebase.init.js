// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDITjo8d-8cJXzhVNOeakyhfh3U5l9z60E",
    authDomain: "wood-toys-73a0e.firebaseapp.com",
    projectId: "wood-toys-73a0e",
    storageBucket: "wood-toys-73a0e.appspot.com",
    messagingSenderId: "170242894654",
    appId: "1:170242894654:web:9c2d27d0c6e692f8181a6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth