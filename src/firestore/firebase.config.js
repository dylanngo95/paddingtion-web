import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAamBxq-ElA6U7kJfLiXu_6j1ORkJBRTAk",
    authDomain: "paddington-web.firebaseapp.com",
    projectId: "paddington-web",
    storageBucket: "paddington-web.appspot.com",
    messagingSenderId: "964560021975",
    appId: "1:964560021975:web:0af1e0ee7c72ce7c664392"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;