import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB1-T_I4DAfsfSvDQk87Zs8JHXVFoxIGE",
  authDomain: "oasis-7d0ac.firebaseapp.com",
  projectId: "oasis-7d0ac",
  storageBucket: "oasis-7d0ac.appspot.com",
  messagingSenderId: "17274191385",
  appId: "1:17274191385:web:877981d589e286c16d3488",
  measurementId: "G-YGYDR7ZKBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function getSongs(db){
  const songsCol = collection(db, 'songs');
  const songSnapshot = await getDocs(songsCol);
  const songList = songSnapshot.docs.map(doc => doc.data());
  console.log(songList);
  return songList;
}