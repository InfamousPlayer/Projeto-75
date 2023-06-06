import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCKLzb8EKlB2cHCjJqJgTU1Bq69dprw2Pg",
  authDomain: "projeto-71-5fcc3.firebaseapp.com",
  projectId: "projeto-71-5fcc3",
  storageBucket: "projeto-71-5fcc3.appspot.com",
  messagingSenderId: "480928072559",
  appId: "1:480928072559:web:b6daa65cd6f2b67c091e9a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
