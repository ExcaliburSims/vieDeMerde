import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCXtcqV69sTkFysDHK7XMCs5APFQxGRIX0",
  authDomain: "react-redux-13e02.firebaseapp.com",
  projectId: "react-redux-13e02",
  storageBucket: "react-redux-13e02.appspot.com",
  messagingSenderId: "1024404230404",
  appId: "1:1024404230404:web:82612345084ed8c1eec051",
});

export const auth = app.auth();
export default app;
