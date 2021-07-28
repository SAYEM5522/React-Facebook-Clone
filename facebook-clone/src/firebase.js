 import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA_SRn6SHrWYEudOUXzWhVensII3762t2A",
  authDomain: "facebook-clone-2fbe7.firebaseapp.com",
  databaseURL: "https://facebook-clone-2fbe7.firebaseio.com",
  projectId: "facebook-clone-2fbe7",
  storageBucket: "facebook-clone-2fbe7.appspot.com",
  messagingSenderId: "220841886444",
  appId: "1:220841886444:web:6211e86171487a0d10dbc9",
  measurementId: "G-SSDKJB735P"
};
const firebaseapp=firebase.initializeApp(firebaseConfig)
const db=firebaseapp.firestore()
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export default db;
export {auth,provider}