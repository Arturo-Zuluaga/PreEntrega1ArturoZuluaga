import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7I363kBQ080O_ok5aMTcdnFs-gXDWFIw",
  authDomain: "entregaproyectofinalarturoz.firebaseapp.com",
  projectId: "entregaproyectofinalarturoz",
  storageBucket: "entregaproyectofinalarturoz.appspot.com",
  messagingSenderId: "907909917404",
  appId: "1:907909917404:web:f1722c43b0bea9bde8a219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ChakraProvider>
    <App/>
      
    </ChakraProvider>
  /* </React.StrictMode>, */
)
