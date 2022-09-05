import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  collection,
  writeBatch,
  query,
  getDocs
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
initializeApp(firebaseConfig)
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(
      collectionRef,
      object.title.toLowerCase()
    )
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('batch write completed')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const qry = query(collectionRef)
  const querySnapshot = await getDocs(qry)
  const categories = querySnapshot.docs.map((docSnapshot) =>
    docSnapshot.data()
  )
  return categories
}

export const createUserFromAuth = async (
  userAuth,
  additionalInfo
) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userDocSnapshot = await getDoc(userDocRef)
  if (!userDocSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdOn = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdOn,
        ...additionalInfo
      })
    } catch (error) {
      console.log('error occurred', error.message)
    }
  }
  return userDocSnapshot
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

export const signInAuthUserWithEmailAndPassword = async (
  email,
  password
) => {
  if (!email || !password) return
  return await signInWithEmailAndPassword(
    auth,
    email,
    password
  )
}

export const signOutUser = () => signOut(auth)
export const onAuthStateChangeListner = (callback) =>
  onAuthStateChanged(auth, callback)
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (authData) => {
        unsubscribe()
        resolve(authData)
      },
      reject
    )
  })
}
