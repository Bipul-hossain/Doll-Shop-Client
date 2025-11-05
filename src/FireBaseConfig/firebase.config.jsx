// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF_n16XHdBlEc8RgxmxjYnIprXTM0LJ5A",
  authDomain: "doll-shop-497d2.firebaseapp.com",
  projectId: "doll-shop-497d2",
  storageBucket: "doll-shop-497d2.firebasestorage.app",
  messagingSenderId: "444822186697",
  appId: "1:444822186697:web:523dc24b5b647ec1ae3b18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
