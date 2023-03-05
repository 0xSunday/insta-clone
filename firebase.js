// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK_vklZrrKOJdxh23_KOBiIiIb7t0HZac",
  authDomain: "insta-clone-5062b.firebaseapp.com",
  projectId: "insta-clone-5062b",
  storageBucket: "insta-clone-5062b.appspot.com",
  messagingSenderId: "131461151612",
  appId: "1:131461151612:web:80b1813194b4617f86c2f9",
  measurementId: "G-JTBBS6HXHD",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
