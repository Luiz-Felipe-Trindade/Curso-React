// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRHDVqA3KIXGRad6c1g5b9Cbq8IkOwKJY",
  authDomain: "miniblog-7cd6b.firebaseapp.com",
  projectId: "miniblog-7cd6b",
  storageBucket: "miniblog-7cd6b.appspot.com",
  messagingSenderId: "658507113411",
  appId: "1:658507113411:web:2965173752dc9bfe465376",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
