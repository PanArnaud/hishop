import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBQjjVn5OmY3zNPl04FC4TxsMG5HotT7o",
  authDomain: "hishop-99818.firebaseapp.com",
  projectId: "hishop-99818",
  storageBucket: "hishop-99818.appspot.com",
  messagingSenderId: "869324870870",
  appId: "1:869324870870:web:878a899e40906c687d6577",
  measurementId: "G-GYR91JCR84",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
