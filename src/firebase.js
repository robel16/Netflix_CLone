import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOuYgj1tPe2r2kRVOxDRZYTEpHbr22tYI",
  authDomain: "netflix-clone-777cb.firebaseapp.com",
  projectId: "netflix-clone-777cb",
  storageBucket: "netflix-clone-777cb.appspot.com",
  messagingSenderId: "940091623360",
  appId: "1:940091623360:web:255b089061429bc5c7aa25",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
