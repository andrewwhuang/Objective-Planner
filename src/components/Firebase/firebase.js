import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  createUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signUserIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signUserOut = () =>
    this.auth.signOut();

  resetPassword = (email) =>
    this.auth.sendPasswordResetEmail(email);

  getCurrentUid = () => {
    return this.auth.currentUser.uid;
  }

  userById = (uid) => {
    this.db.ref(`users/${uid}`);
  }

  writeToDb = (uid, data) => {
    this.db.ref(`numbers/${uid}`).set(data);
  }

  readDb = (uid) => {
    this.db.ref(`numbers/${uid}`).once('value').then((snapshot) => {
      var number = (snapshot.val() && snapshot.val().number) || 'Anonymous' ;
      console.log(number);
    });
  }
}

export default Firebase;