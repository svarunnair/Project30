
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiaq-dMEntV29xu9s59vdxrrGm-9u0Jj0",
  authDomain: "otp-d2e30.firebaseapp.com",
  projectId: "otp-d2e30",
  storageBucket: "otp-d2e30.appspot.com",
  messagingSenderId: "1095449607159",
  appId: "1:1095449607159:web:d1603ad899923423a88cf2",
  measurementId: "G-YJ1Z5L4SF7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
