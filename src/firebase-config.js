import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyB36tBQJW3kdzTz9igkG_pSVzrxld4zyhQ",
    authDomain: "new-firebase-tutorial-9e9f3.firebaseapp.com",
    projectId: "new-firebase-tutorial-9e9f3",
    storageBucket: "new-firebase-tutorial-9e9f3.appspot.com",
    messagingSenderId: "685440585455",
    appId: "1:685440585455:web:c47cbdf93cfbe52df8951a",
    measurementId: "${config.measurementId}"
  };

  const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
 export const auth = getAuth(app);
export const database = ref(getDatabase(app)) 
export const storage = getStorage()