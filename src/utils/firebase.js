// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  , createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLa9VBQG3nsdsKMO6t1qf3KipuKGik6mI",
  authDomain: "netflixgptt-fecb8.firebaseapp.com",
  projectId: "netflixgptt-fecb8",
  storageBucket: "netflixgptt-fecb8.appspot.com",
  messagingSenderId: "695073642673",
  appId: "1:695073642673:web:0ed906de275595cf876a90",
  measurementId: "G-0WBWBP03JT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()