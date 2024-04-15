// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLmC3ngA5h8ENx7AGPbYI1USJRtbaMxks",
  authDomain: "b9a9-92593.firebaseapp.com",
  projectId: "b9a9-92593",
  storageBucket: "b9a9-92593.appspot.com",
  messagingSenderId: "1075171867038",
  appId: "1:1075171867038:web:265cad30f1bde5d8e8fe8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);

export default app;