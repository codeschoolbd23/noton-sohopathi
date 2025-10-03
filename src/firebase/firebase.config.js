// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpC-aNsz-9-MXCVFIHTH27qgvvd0MUUI8",
  authDomain: "noton-sohopathi.firebaseapp.com",
  projectId: "noton-sohopathi",
  storageBucket: "noton-sohopathi.firebasestorage.app",
  messagingSenderId: "450085492627",
  appId: "1:450085492627:web:79acd2ba0e5ffcf25d3a66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;