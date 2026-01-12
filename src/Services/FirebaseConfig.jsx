import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd3oqxZKojIxraDNTIKqFmvHx7O0ZjQ-4",
  authDomain: "git-project-bdc6f.firebaseapp.com",
  projectId: "git-project-bdc6f",
  storageBucket: "git-project-bdc6f.firebasestorage.app",
  messagingSenderId: "476973182422",
  appId: "1:476973182422:web:124eae30031ffb1a01c877",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
