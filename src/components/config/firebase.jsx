// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCopN6phYZXXp5aSx2N2OlPk23QLZzfJds",
  authDomain: "financy-app-65e99.firebaseapp.com",
  projectId: "financy-app-65e99",
  storageBucket: "financy-app-65e99.firebasestorage.app",
  messagingSenderId: "94519094946",
  appId: "1:94519094946:web:b20cc41da577bfc30231fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider };

