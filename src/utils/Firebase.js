// Import the functions you need from the SDKs you need
import React from 'react';

import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzPuyzVqs5FSUTlgosjce4sjmDC-oIRu4",
  authDomain: "quizapp-374c3.firebaseapp.com",
  projectId: "quizapp-374c3",
  storageBucket: "quizapp-374c3.appspot.com",
  messagingSenderId: "108740110058",
  appId: "1:108740110058:web:e6fff5344783cde916d993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)