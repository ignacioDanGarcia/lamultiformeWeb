import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBiWNKU1XQWPCsx7ddE4A-HZz_ATwD-A_c",
  authDomain: "multiforme-prueba.firebaseapp.com",
  projectId: "multiforme-prueba",
  storageBucket: "multiforme-prueba.appspot.com",
  messagingSenderId: "392964231935",
  appId: "1:392964231935:web:754130ecd56d54dabe72ca"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
