import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHN5t3odZdJoG7avbl9ar3JWD003xAITc",
    authDomain: "slack-clone-daba0.firebaseapp.com",
    projectId: "slack-clone-daba0",
    storageBucket: "slack-clone-daba0.appspot.com",
    messagingSenderId: "38652241368",
    appId: "1:38652241368:web:9d3f9017316d23243bfead",
    measurementId: "G-EGXSBYGL5V"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;