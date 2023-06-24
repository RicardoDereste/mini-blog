import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDt9Svcs6BOt8Xc3wpDuQaBO2SeTIVlF9o",
  authDomain: "miniblog-a206d.firebaseapp.com",
  projectId: "miniblog-a206d",
  storageBucket: "miniblog-a206d.appspot.com",
  messagingSenderId: "838617007409",
  appId: "1:838617007409:web:8210623ca0a968df4adc10"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };