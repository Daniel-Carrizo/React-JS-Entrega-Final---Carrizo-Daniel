// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqgNrzuYIKrulSsnAw3ofrUTAA3ReT8Io",
  authDomain: "vememoda-b0826.firebaseapp.com",
  projectId: "vememoda-b0826",
  storageBucket: "vememoda-b0826.appspot.com",
  messagingSenderId: "383551182870",
  appId: "1:383551182870:web:b7257ce9d038fcaf6bbd37",
  measurementId: "G-ZCEWKENMWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);