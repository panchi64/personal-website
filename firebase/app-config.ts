// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKxFs937SLRoJYAjWGcsCq0v2SkQUJm7k",
  authDomain: "panchi64-main-website.firebaseapp.com",
  databaseURL: "https://panchi64-main-website-default-rtdb.firebaseio.com",
  projectId: "panchi64-main-website",
  storageBucket: "panchi64-main-website.appspot.com",
  messagingSenderId: "75906817678",
  appId: "1:75906817678:web:6c61621c6a6527b65f33df",
  measurementId: "G-BGKXGJ5G74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
