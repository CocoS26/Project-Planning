import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAks0lBaAndKbkMpvKspNEnppgNOSH-Mtw",
    authDomain: "gifted-chat-app-98b7f.firebaseapp.com",
    projectId: "gifted-chat-app-98b7f",
    storageBucket: "gifted-chat-app-98b7f.appspot.com",
    messagingSenderId: "496000649431",
    appId: "1:496000649431:web:e47bfd2770cdefab5e4892"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export {db, auth}