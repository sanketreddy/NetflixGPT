// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkgHYtlhADvxOsKOmb9W_SLx0hxdlUhz4",
  authDomain: "netflixgpt-e4c1c.firebaseapp.com",
  projectId: "netflixgpt-e4c1c",
  storageBucket: "netflixgpt-e4c1c.appspot.com",
  messagingSenderId: "877204921514",
  appId: "1:877204921514:web:24cf407f10af9033d984d3",
  measurementId: "G-2PGS32XQF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
