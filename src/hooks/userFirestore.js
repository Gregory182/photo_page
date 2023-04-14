import { collection, onSnapshot} from 'firebase/firestore'
import {useEffect} from 'react'
import {useState} from 'react'
import {db} from '../firebase'

export const useFirestore = (collectionPath) => {
  const [docs, setDocs] = useState([])
  const [selectedPhotosNumber, setSelectedPhotosNumber] = useState(0)

  useEffect(() => {
    console.log('odpalam efekt')
    const unsub = onSnapshot(collection(db, collectionPath), (snap) => {
      let documents = []
      let selected = 0
      snap.forEach((doc) => {
        documents.push({...doc.data(), id: doc.id})
        if (doc.data().inBasket > 0 && doc.data().inBasket !== undefined) {
          selected++
        }
      })
      console.log('pobrałem dokumenty')
      setDocs(documents)
      setSelectedPhotosNumber(selected)
    })

    return () => unsub()
  }, [collectionPath])

  return {docs, selectedPhotosNumber}
}
