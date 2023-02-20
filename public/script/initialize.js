// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbG5eMdG_WmgCDq1NzEezP3PaDKBxx0ng",
  authDomain: "najio-mad.firebaseapp.com",
  databaseURL: "https://najio-mad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "najio-mad",
  storageBucket: "najio-mad.appspot.com",
  messagingSenderId: "669175756950",
  appId: "1:669175756950:web:77a3b570c4df078c01aab7",
  measurementId: "G-L746DNJZDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const messaging = getMessaging(app);