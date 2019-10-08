import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDupTvjx9X_0OIMlBy5uLrNdiz6if8N6nY",
    authDomain: "justclockit-d84b6.firebaseapp.com",
    databaseURL: "https://justclockit-d84b6.firebaseio.com",
    projectId: "justclockit-d84b6",
    storageBucket: "",
    messagingSenderId: "592324058079",
    appId: "1:592324058079:web:acad0d1c0b390c795e026a",
    measurementId: "G-QHMJN4X5GJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
export default firebase