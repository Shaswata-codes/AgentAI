import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "agentai-53363.firebaseapp.com",
    projectId: "agentai-53363",
    storageBucket: "agentai-53363.firebasestorage.app",
    messagingSenderId: "418510180355",
    appId: "1:418510180355:web:7d5af82d36541167ba7e36"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();