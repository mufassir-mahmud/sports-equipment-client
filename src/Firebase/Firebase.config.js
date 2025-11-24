// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe0PMMdSp1ZhoxBDURCoXczFVruUyD3mA",
  authDomain: "equishop-baa92.firebaseapp.com",
  projectId: "equishop-baa92",
  storageBucket: "equishop-baa92.firebasestorage.app",
  messagingSenderId: "839290328994",
  appId: "1:839290328994:web:bb41c8ccdee8978e0684fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth