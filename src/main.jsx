import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPqAcnsk-ypbgnsdRiW5CtpevnO7hdLlA",
  authDomain: "locutrina.firebaseapp.com",
  projectId: "locutrina",
  storageBucket: "locutrina.appspot.com",
  messagingSenderId: "289073117936",
  appId: "1:289073117936:web:fbba11d6867c30fa8ca035"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
