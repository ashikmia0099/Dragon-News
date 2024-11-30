// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtqtCVKzbIdf51K1UDMlnoEaYRrsbUYHg",
  authDomain: "dragon-news-2c4e0.firebaseapp.com",
  projectId: "dragon-news-2c4e0",
  storageBucket: "dragon-news-2c4e0.firebasestorage.app",
  messagingSenderId: "894879316304",
  appId: "1:894879316304:web:0a966f20960306a2cc1455"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;