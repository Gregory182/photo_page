import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB2-tQxVftoi5CBFSIz88gu8HvTOCSwoUI',
  authDomain: 'photopage-4a86d.firebaseapp.com',
  projectId: 'photopage-4a86d',
  storageBucket: 'photopage-4a86d.appspot.com',
  messagingSenderId: '1015306390839',
  appId: '1:1015306390839:web:49e0730875f66209e59eb2',
  measurementId: 'G-4KF8Z4TX7M',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth()

// const imagesRef = ref(storage, 'images')
