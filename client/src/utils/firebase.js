import firebase from "firebase";



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8U-vUUGBZn0pHhDGGnDT_k7G6a5DkI5Y",
    authDomain: "cooking4normals.firebaseapp.com",
    projectId: "cooking4normals",
    storageBucket: "cooking4normals.appspot.com",
    messagingSenderId: "958542490641",
    appId: "1:958542490641:web:bb9e81f8754282a14795b0",
    measurementId: "G-FSL2L3MEQC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth();
  

