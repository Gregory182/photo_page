// import styled from '@emotion/styled'
import styled from '@emotion/styled/macro'
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/ui/Button'
import { db, storage } from '../../firebase'
import AddPhotos from './components/AddPhotos'
import PhotoCard from './components/PhotoCard'

const Container = styled.div``
const SessionHeader = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const SessionStatus = styled.div`
  span {
    background-color: lightgray;
    padding: 0.2em 1em;
    border-radius: 6px;
  }
`
const PhotoGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.7rem;
  margin: 40px 0 160px 0;

  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }
`

const OptionsBar = styled.div`
  height: 50px;
  border: 1px solid lightgray;
  margin-top: 20px;
`
const SessionPage = () => {
  const params = useParams()
  const [photos, setPhotos] = useState([])
  const [photoSession, setPhotoSession] = useState({})

  useEffect(() => {
    const getPhotos = async () => {
      const photosRef = collection(
        db,
        'photoSessions',
        params.sessionId,
        'photos'
      )
      const photos = await getDocs(photosRef)
      let res = []

      photos.forEach((photo) => {
        res.push(photo.data())
      })
      setPhotos(res)
    }
    getPhotos()
  }, [params.sessionId])

  useEffect(() => {
    const getSession = async () => {
      const sessionRef = doc(db, 'photoSessions', params.sessionId)
      const res = await getDoc(sessionRef)
      setPhotoSession(res.data())
    }
    getSession()
  }, [params.sessionId])

  const addImage = async (e) => {
    const imgRef = doc(db, 'photoSessions', params.sessionId)
    const res = await updateDoc(imgRef, {
      imgUrl: e,
    })
    console.log(res)
  }

  const onDelete = async (name, photoId) => {
    console.log(name)
    const imgStorageRef = ref(storage, `images/${params.sessionId}/${name}`)
    const imgRef = doc(db, 'photoSessions', params.sessionId, 'photos', photoId)

    deleteDoc(imgRef)
    const filteredPhotos = photos.filter((photo) => photo.id !== photoId)
    setPhotos(filteredPhotos)

    deleteObject(imgStorageRef)
      .then(() => {})
      .catch(console.log('error'))
  }

  return (
    <Container>
      <SessionHeader>
        <InfoSection>
          <div>
            <h1>{photoSession.name}</h1>
          </div>
          <SessionStatus>
            <span>Wysłana do klienta</span>
          </SessionStatus>
          <div>{photoSession.user}</div>
        </InfoSection>
        <div>
          <Button>Wyślij Sesje</Button>
        </div>
      </SessionHeader>
      <AddPhotos sessionId={params.sessionId} />
      <OptionsBar />
      <PhotoGallery>
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            url={photo.url}
            name={photo.name}
            photoId={photo.id}
            setMainImg={addImage}
            deletePhoto={onDelete}
          ></PhotoCard>
        ))}
      </PhotoGallery>
    </Container>
  )
}

export default SessionPage
