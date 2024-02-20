// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQsSD70ittYq2gt6BbeIQeTvAtlHKGvD8",
  authDomain: "countdown-jobfiar.firebaseapp.com",
  projectId: "countdown-jobfiar",
  storageBucket: "countdown-jobfiar.appspot.com",
  messagingSenderId: "1056188962142",
  appId: "1:1056188962142:web:ebb85d164c520b64176bcf",
  measurementId: "G-PW0Z9XQ3WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
