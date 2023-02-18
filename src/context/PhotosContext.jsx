import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore'
import {deleteObject, ref} from 'firebase/storage'
import {createContext, useState} from 'react'
import {db, storage} from '../firebase'

export const PhotosContext = createContext()

export const PhotosContextProvider = ({children}) => {
  const [photos, setPhotos] = useState([])

  const getPhotos = async (ref) => {
    const photosRef = collection(db, `photoSessions/${ref}/photos`)
    const photos = await getDocs(photosRef)
    let res = []

    photos.forEach((photo) => {
      res.push(photo.data())
    })
    setPhotos(res)
    console.log(res)
  }

  const addPhotoToBasket = (sessionId, photoId, action) => {
    const imgRef = doc(db, 'photoSessions', sessionId, 'photos', photoId)
    const choosen = action === 'add' ? 1 : 0
    updateDoc(imgRef, {inBasket: choosen})
  }

  const deletePhotos = async (sessionId, photoId, name) => {
    const imgStorageRef = ref(storage, `images/${sessionId}/${name}`)
    const imgStorageRefRes = ref(storage, `images/${sessionId}/resized_${name}`)
    const imgRef = doc(db, 'photoSessions', sessionId, 'photos', photoId)

    deleteDoc(imgRef)
    const filteredPhotos = photos.filter((photo) => photo.id !== photoId)
    setPhotos(filteredPhotos)

    deleteObject(imgStorageRef)
      .then(() => {})
      .catch(console.log('error'))
    deleteObject(imgStorageRefRes)
      .then(() => {})
      .catch(console.log('error'))
  }

  return (
    <PhotosContext.Provider
      value={{photos, getPhotos, deletePhotos, addPhotoToBasket}}
    >
      {children}
    </PhotosContext.Provider>
  )
}
