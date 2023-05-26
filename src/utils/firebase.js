import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAaCXYH2fI_r09OoFtbeP_3WPq6VhjsBYM",
  authDomain: "physerapyv1-f6f23.firebaseapp.com",
  projectId: "physerapyv1-f6f23",
  storageBucket: "physerapyv1-f6f23.appspot.com",
  messagingSenderId: "567266129899",
  appId: "1:567266129899:web:7580b0d49a6ea27cdd8bae"
};
export const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initFirebase)

