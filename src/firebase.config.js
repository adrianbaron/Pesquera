import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDUWryAj2X_2nJQ2PhivR1VclL2vFvytBQ",
    authDomain: "pesquerapp-ea77e.firebaseapp.com",
    databaseURL: "https://pesquerapp-ea77e-default-rtdb.firebaseio.com",
    projectId: "pesquerapp-ea77e",
    storageBucket: "pesquerapp-ea77e.appspot.com",
    messagingSenderId: "1021780882303",
    appId: "1:1021780882303:web:44dbb713f85526cc8ee04a"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
