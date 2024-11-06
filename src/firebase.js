// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDb34_W3SIRQw0LTSZQjJAhnJXNyEM0K5o',
  authDomain: 'lista-compras-desafio.firebaseapp.com',
  projectId: 'lista-compras-desafio',
  storageBucket: 'lista-compras-desafio.firebasestorage.app',
  messagingSenderId: '719316601467',
  appId: '1:719316601467:web:d277c860b89716fd6970de',
  measurementId: 'G-T534GHCYBT',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, app }
