import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLDgw21T1eOEl5hx25RR-jleXwQ7MubBM",
  authDomain: "practise-ee181.firebaseapp.com",
  projectId: "practise-ee181",
  storageBucket: "practise-ee181.appspot.com",
  messagingSenderId: "1000102638062",
  appId: "1:1000102638062:web:18b8107460fbb90fd3deff",
  measurementId: "G-3PNYGQVCYF"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

//initializing database
const db=firebaseApp.firestore();
//for authentication
const auth=firebase.auth();
//we want to use it outside the file
export { db , auth };
