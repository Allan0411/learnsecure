import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCqLp3NeZZEYLzBmWxKpTlv_ugnvX-AXt4",
  authDomain: "hackathon1-fef82.firebaseapp.com",
  projectId: "hackathon1-fef82",
  storageBucket: "hackathon1-fef82.firebasestorage.app",
  messagingSenderId: "808640167830",
  appId: "1:808640167830:web:ef60ae9d5ac0c45b3167b7",
  measurementId: "G-G4G3XSGCP7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);