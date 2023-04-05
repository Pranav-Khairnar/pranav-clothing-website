

import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'



// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-fVE56JFqC5qAKwX3__c2tfAs4nROkvs",
    authDomain: "clothing-customers-db.firebaseapp.com",
    projectId: "clothing-customers-db",
    storageBucket: "clothing-customers-db.appspot.com",
    messagingSenderId: "752464543293",
    appId: "1:752464543293:web:f1614ebbec04c884f83454"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const providerGoogle = new GoogleAuthProvider();
  providerGoogle.setCustomParameters({
    prompt: "select_account"
  });



  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, providerGoogle);
  //export const signInWithGoogleRedirect = () => signInWithRedirect(auth, providerGoogle);




export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...additionalInfo,

      })
    } catch (error) {
          console.log(error.message);
    }}

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return createUserWithEmailAndPassword(auth, email, password);
}