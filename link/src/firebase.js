// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdzEZP8vbQOOmzb7HcXGXExCOvZMqX8BU",
  authDomain: "otp-auth-b504c.firebaseapp.com",
  projectId: "otp-auth-b504c",
  storageBucket: "otp-auth-b504c.appspot.com",
  messagingSenderId: "450278155299",
  appId: "1:450278155299:web:6ebfece9d67543ef1dbd96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
