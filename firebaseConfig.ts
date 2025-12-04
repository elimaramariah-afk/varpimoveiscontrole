// NOTE: This file is set up for when you are ready to connect to real Firestore.
// For the demo, we use the Mock Service in propertyService.ts.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your actual Firebase config keys
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initialize Firebase (Conditional to prevent crash if keys are missing during demo)
const app = firebaseConfig.apiKey !== "YOUR_API_KEY" ? initializeApp(firebaseConfig) : null;
export const db = app ? getFirestore(app) : null;