// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqIumEtvd3D-SDve3xsVbv-VnVwrJKFRw",
  authDomain: "netflix-gpt-ec363.firebaseapp.com",
  projectId: "netflix-gpt-ec363",
  storageBucket: "netflix-gpt-ec363.appspot.com",
  messagingSenderId: "82025242679",
  appId: "1:82025242679:web:9b5558bfcbf20632f9dfb2",
  measurementId: "G-KSWL0JGV33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//custom changes by akshay
const auth = getAuth(app);

export { auth };
