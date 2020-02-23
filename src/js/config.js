import firebase from 'firebase/app';
import 'firebase/database';

console.log(process.env.REACT_APP_API_KEY)

const config= {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSANGINGSENDERID
};

const app = firebase.initializeApp(config);
export { app };
