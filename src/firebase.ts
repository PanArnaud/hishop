import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, functions };
