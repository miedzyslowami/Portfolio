import firebase from 'firebase/app';
import 'firebase/database';

const config= {
  apiKey: "AIzaSyDeeIeE-QCsnnxebJeR1mRz05lre3LbWX8",
  authDomain: "portfolio-contactform.firebaseapp.com",
  databaseURL: "https://portfolio-contactform.firebaseio.com",
  projectId: "portfolio-contactform",
  storageBucket: "portfolio-contactform.appspot.com",
  messagingSenderId: "465303556569"
};

const app = firebase.initializeApp(config);
export { app };
