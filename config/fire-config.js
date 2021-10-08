import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnc6aAZt8t8sKEzMs8nMSs0l7qbE6TGMM",
  authDomain: "next-blog-88ba1.firebaseapp.com",
  projectId: "next-blog-88ba1",
  storageBucket: "next-blog-88ba1.appspot.com",
  messagingSenderId: "705996318350",
  appId: "1:705996318350:web:a4576932374c1d03624bdf",
  measurementId: "G-57QJJNLF6W"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;