import firebase from 'firebase/app'
import "firebase/auth"

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export const auth = app.auth()
  export default app