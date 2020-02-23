import firebase from 'firebase/app';
import 'firebase/database';

const config= {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSANGINGSENDERID
};

const app = firebase.initializeApp(config);
export { app };
