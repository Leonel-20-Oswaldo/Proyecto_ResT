import firebase from  'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCLxaxy-bG3frnYcC62MucCbr3H9-dgHu4",
    authDomain: "prorest-229d7.firebaseapp.com",
    projectId: "prorest-229d7",
    storageBucket: "prorest-229d7.appspot.com",
    messagingSenderId: "59768389787",
    appId: "1:59768389787:web:b108f2109a3ef3f846463e"
  } 

  export const firebaseApp = firebase.initializeApp (firebaseConfig) 