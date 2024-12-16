// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlPBSBC4js2JIxs1GS7zAJPS1MruJOZtE",
  authDomain: "auth-project-fa340.firebaseapp.com",
  projectId: "auth-project-fa340",
  storageBucket: "auth-project-fa340.firebasestorage.app",
  messagingSenderId: "393977167175",
  appId: "1:393977167175:web:8084663cd3f215b6d7e062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth