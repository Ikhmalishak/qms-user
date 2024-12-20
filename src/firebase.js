// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC95vaM_RJJYB_QMigVxjA3fJDIqcWu4wc",
  authDomain: "testing-f5721.firebaseapp.com",
  projectId: "testing-f5721",
  storageBucket: "testing-f5721.firebasestorage.app",
  messagingSenderId: "517271989421",
  appId: "1:517271989421:web:ed038902c20c774e68ea24",
  measurementId: "G-CSVH44X4PR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
