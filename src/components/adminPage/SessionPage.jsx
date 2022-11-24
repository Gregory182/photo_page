import styled from '@emotion/styled/macro'
import {doc, getDoc, updateDoc} from 'firebase/firestore'
import React, {useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import AddPhotos from './AddPhoto/AddPhotos'
import Modal from '../Modal'
import {Button} from '../ui/Button'
import {PhotosContext} from '../../context/PhotosContext'
import {db} from '../../firebase'
import {GoChevronRight} from 'react-icons/go'
import {GoChevronLeft} from 'react-icons/go'

import PhotoCard from './PhotoCard'

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
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(1)

  const [photoSession, setPhotoSession] = useState({})
  const {photos, getPhotos, deletePhotos} = useContext(PhotosContext)

  useEffect(() => {
    getPhotos(params.sessionId)
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

  const openGallery = (index) => {
    setIsOpen(true)
    setPhotoIndex(index)
  }
  const nextPhoto = () => {
    console.log(photos.length, photoIndex)

    if (photoIndex < photos.length) {
      setPhotoIndex((prevIntex) => prevIntex + 1)
    }
  }
  const prevPhoto = () => {
    setPhotoIndex((prevIntex) => prevIntex - 1)
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
      <Modal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        width='100vw'
        heigth='90vh'
      >
        <div>
          <GoChevronLeft onClick={prevPhoto} />
          <GoChevronRight onClick={nextPhoto} />
          <img src={photos[photoIndex]?.url} alt='' />
        </div>
      </Modal>
      <PhotoGallery>
        {photos.map((photo, index) => (
          <PhotoCard
            index={index}
            key={photo.id}
            url={photo.resizedUrl}
            name={photo.name}
            photoId={photo.id}
            sessionId={params.sessionId}
            setMainImg={addImage}
            deletePhoto={deletePhotos}
            displayPhoto={openGallery}
          ></PhotoCard>
        ))}
      </PhotoGallery>
    </Container>
  )
}

export default SessionPage
