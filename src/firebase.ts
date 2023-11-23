import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env["NEXT_PUBLIC_FIREBASE_API_KEY"],
  authDomain: process.env["PUBLIC_FIREBASE_AUTH_DOMAIN"],
  projectId: process.env["PUBLIC_FIREBASE_PROJECT_ID"],
  storageBucket: process.env["PUBLIC_FIREBASE_STORAGE_BUCKET"],
  messagingSenderId: process.env["PUBLIC_FIREBASE_MESSAGING_SENDER_ID"],
  appId: process.env["PUBLIC_FIREBASE_APP_ID"],
  measurementId: process.env["PUBLIC_FIREBASE_MEASUREMENT_ID"],
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
