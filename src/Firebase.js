import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTtEcQ8neFimaS9PFs402Mq1he6SAYJ0M",
  authDomain: "chatty-6ee3b.firebaseapp.com",
  projectId: "chatty-6ee3b",
  storageBucket: "chatty-6ee3b.appspot.com",
  messagingSenderId: "185612499393",
  appId: "1:185612499393:web:a9c874ca13190b4dd59740",
  measurementId: "G-D252YSJ10G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()