import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDbk1aY_TZyib24GxSuey_TajBSitTM3b0",
    authDomain: "netflix-3520e.firebaseapp.com",
    projectId: "netflix-3520e",
    storageBucket: "netflix-3520e.appspot.com",
    messagingSenderId: "687111066431",
    appId: "1:687111066431:web:1f6fe2dda7094f8561b98a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {auth};
export default db