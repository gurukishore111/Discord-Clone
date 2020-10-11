import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   //Your config
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//Database
const db = firebaseApp.firestore();
//Auth
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}

export default db;