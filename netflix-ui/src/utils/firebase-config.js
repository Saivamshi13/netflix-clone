import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDqq7hA6Eglld4HUqhtIDZ0yFS0yCrmTFg",
  authDomain: "react-netflix-clone-1b6d6.firebaseapp.com",
  projectId: "react-netflix-clone-1b6d6",
  storageBucket: "react-netflix-clone-1b6d6.appspot.com",
  messagingSenderId: "108153498659",
  appId: "1:108153498659:web:a4a42a0849b9f68dee9596",
  measurementId: "G-HH00SZ1PWT"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);



