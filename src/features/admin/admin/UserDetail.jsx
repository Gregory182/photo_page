import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import React, {useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import {useParams} from 'react-router-dom'
import {db} from '../../../firebase'
import PhotoSessionCard from '../../../components/shared/PhotoSessionCard'
const UserDetail = () => {
  const [galeries, setGaleries] = useState([])
  const [user, setUser] = useState({})
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const params = useParams()
  const submitAddGallery = async (data) => {
    const userRef = doc(db, 'photoSessions')
    setDoc(userRef, {
      nazwa: data.galeryName,
    })
  }

  useEffect(() => {
    const fetchGaleries = async () => {
      const photoSessionRef = collection(db, 'photoSessions')
      const q = query(photoSessionRef, where('user', '==', params.id))
      const data = await getDocs(q)

      let res = []
      data.forEach((doc) => {
        res.push({id: doc.id, ...doc.data()})
      })
      setGaleries(res)
    }
    fetchGaleries()
  }, [params.id])

  useEffect(() => {
    const fetchGaleries = async () => {
      const userRef = doc(db, 'users', params.id)
      console.log(params.id)
      const data = await getDoc(userRef)
      setUser(data.data())
    }
    fetchGaleries()
  }, [params.id])

  return (
    <div>
      <div>
        Użytkownik: {user.firstName} {user.lastName}
      </div>
      <div>
        Galerie użytkownika:
        {galeries.map((item) => (
          <PhotoSessionCard key={item.id} session={item} />
        ))}
      </div>
      <div>Dodaj Galerie</div>
      <form onSubmit={handleSubmit(submitAddGallery)}>
        <div>
          <label>Dodaj Galerie</label>
          <input {...register('title', {required: true})} />
          {errors.galeryName && <>Dupa</>}
        </div>
        <input type='submit' />
      </form>
    </div>
  )
}

export default UserDetail
