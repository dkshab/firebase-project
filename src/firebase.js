import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDJyHTRZPRMMOunw92x3Xk09GbzXpHO2k8",
  authDomain: "fir-project-67e88.firebaseapp.com",
  databaseURL: "https://fir-project-67e88.firebaseio.com",
  projectId: "fir-project-67e88",
  storageBucket: "",
  messagingSenderId: "1093906003913",
  appId: "1:1093906003913:web:dda995e763317fd4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

window.firebase = firebase;

export default firebase;
