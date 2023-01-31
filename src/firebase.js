import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyBZbRKoYbIRc34NvyYlkwObtk2pGZgWYzs",
  authDomain: "seveserial.firebaseapp.com",
  projectId: "seveserial",
  storageBucket: "seveserial.appspot.com",
  messagingSenderId: "205928916685",
  appId: "1:205928916685:web:4f70fd50db7c0b18826b84",
});

export const db = getFirestore(app);
export const auth = getAuth();
