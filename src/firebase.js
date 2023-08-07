import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWR6oiW6LAZJoIN1Jaeq24jUoEygtUWQY",
  authDomain: "chat-app-5efa9.firebaseapp.com",
  projectId: "chat-app-5efa9",
  storageBucket: "chat-app-5efa9.appspot.com",
  messagingSenderId: "628424508635",
  appId: "1:628424508635:web:3c558405b732037f09b8fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, db, storage };