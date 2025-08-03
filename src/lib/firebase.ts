import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "demo-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "demo.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "demo.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789:web:demo",
};

// Only initialize Firebase if we have a real API key
let app: any = null;
let auth: any = null;
let googleProvider: any = null;
let db: any = null;

if (process.env.NEXT_PUBLIC_FIREBASE_API_KEY && 
    process.env.NEXT_PUBLIC_FIREBASE_API_KEY !== "demo-key" &&
    !process.env.NEXT_PUBLIC_FIREBASE_API_KEY.includes("your-")) {
  
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  
  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(app);
  
  // Initialize Google Auth Provider
  googleProvider = new GoogleAuthProvider();
  
  // Initialize Cloud Firestore and get a reference to the service
  db = getFirestore(app);
}

export { auth, googleProvider, db };
export default app; 