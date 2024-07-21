import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from '../src/firebase/config';
import { setupAuthUI } from '../src/auth/authUI';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

setupAuthUI(auth, db);
