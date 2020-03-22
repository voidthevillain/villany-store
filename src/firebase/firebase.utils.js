import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyD-egBEBZHlJR-NnBcwUm03KvN77JD6IlA',
  authDomain: 'villa-store-db.firebaseapp.com',
  databaseURL: 'https://villa-store-db.firebaseio.com',
  projectId: 'villa-store-db',
  storageBucket: 'villa-store-db.appspot.com',
  messagingSenderId: '76819735874',
  appId: '1:76819735874:web:6f6c3c176c60ae7f1d54db',
  measurementId: 'G-SKC8KT6P86'
}

firebase.initializeApp(config)

// Google authentication
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase