import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'

import {
  getFirestore,
  getDoc,
  setDoc,
  doc
} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB1fnevUP3NVYDaGKdnQcO1SVVOp3g2scY',
  authDomain: 'crwn-database-b8dfe.firebaseapp.com',
  projectId: 'crwn-database-b8dfe',
  storageBucket: 'crwn-database-b8dfe.appspot.com',
  messagingSenderId: '411882894969',
  appId: '1:411882894969:web:5769e6a5bed500ad4406a8',
  measurementId: 'G-9E960LF4V3'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUserFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)
  const userDocSnapshot = await getDoc(userDocRef)
  if (!userDocSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdOn = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdOn
      })
    } catch (error) {
      console.log('error occurred', error.message)
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) return
  return await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
}
