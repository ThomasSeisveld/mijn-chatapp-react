import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: import.meta.env.API_KEY,
  apiKey: "AIzaSyDBTfk1IMm-W2wjzaIZ5PAghQA7u3OSZLo",
  authDomain: "mijnreactchat.firebaseapp.com",
  projectId: "mijnreactchat",
  storageBucket: "mijnreactchat.appspot.com",
  messagingSenderId: "806219602867",
  appId: "1:806219602867:web:8a60b10c12d0327bfa49c6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()
const storage = getStorage()

export {auth, db, storage, app}