import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCYN41dE2ssOrGBO-2ngPqFGyuGcJ8-kdQ",
  authDomain: "",
  databaseURL: "https://thesmartbucketproject-default-rtdb.firebaseio.com",
  projectId: "thesmartbucketproject",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
