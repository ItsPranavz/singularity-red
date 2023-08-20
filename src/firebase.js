import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtFBpcCNEWBkFZh2JreBAm_SX6RYvNinQ",
  authDomain: "singularity-red.firebaseapp.com",
  projectId: "singularity-red",
  storageBucket: "singularity-red.appspot.com",
  messagingSenderId: "1093747823550",
  appId: "1:1093747823550:web:2911cf0457ad1b2cb61fef",
  measurementId: "G-TY7CW3KBDL"
};

const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);
export default firebase;
