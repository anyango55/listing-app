// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClsLQl_qN1Fr8ek9CNoRThXZ6te4wLp9g",
  authDomain: "listing-app-e7eac.firebaseapp.com",
  projectId: "listing-app-e7eac",
  storageBucket: "listing-app-e7eac.appspot.com",
  messagingSenderId: "464525516096",
  appId: "1:464525516096:web:b7599ccac14965c92f6ea5",
  measurementId: "G-SHKSCFTZYK"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
// const analytics = getAnalytics(app);