import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD92oX4tTcTlVddRjRwvQ8z6PAJ4KqrpTQ",
    authDomain: "clone-a7e49.firebaseapp.com",
    projectId: "clone-a7e49",
    storageBucket: "clone-a7e49.appspot.com",
    messagingSenderId: "125403797272",
    appId: "1:125403797272:web:fe9f1de4c59ec89b58706d",
    measurementId: "G-Y1HQY2DSSF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };