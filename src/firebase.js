import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBskWgTfbHG1lxPnCb4U-cXYHFrredCLjE",
    authDomain: "clone-2e46e.firebaseapp.com",
    projectId: "clone-2e46e",
    storageBucket: "clone-2e46e.appspot.com",
    messagingSenderId: "735911591933",
    appId: "1:735911591933:web:94254603b33c54e186a394",
    measurementId: "G-Y618GJ5Q92"
})

const db=firebaseApp.firestore()

const auth = firebase.auth()

export {auth};