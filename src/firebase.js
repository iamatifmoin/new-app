// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAADIvRgdVxUse-V1GPVaL1B80XfSyJxI",
  authDomain: "daily-bread-a18d7.firebaseapp.com",
  projectId: "daily-bread-a18d7",
  storageBucket: "daily-bread-a18d7.appspot.com",
  messagingSenderId: "178736096235",
  appId: "1:178736096235:web:abc8350ccc9685ac502fae",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
