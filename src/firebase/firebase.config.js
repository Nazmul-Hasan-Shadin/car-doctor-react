// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoFgIvYv88o82CWfgEOa3gGxpY66tPc-o",
  authDomain: "cars-doctor-37021.firebaseapp.com",
  projectId: "cars-doctor-37021",
  storageBucket: "cars-doctor-37021.appspot.com",
  messagingSenderId: "485038522862",
  appId: "1:485038522862:web:baf1c3d4d1f624973f4eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;


