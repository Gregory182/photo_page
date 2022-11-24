import styled from '@emotion/styled/macro'
import {doc, getDoc, updateDoc} from 'firebase/firestore'
import React, {useContext, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Modal from '../Modal'
import {Button} from '../ui/Button'
import {PhotosContext} from '../../context/PhotosContext'
import {db} from '../../firebase'
import PhotoSlide from '../shared/PhotoSlide'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'

const OptionsDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  opacity: 0;
  transition: all ease-in-out 150ms;
  z-index: 100;
`

const PhotoCard = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  /* max-height: ${({horizontal}) => (horizontal ? '50%' : '100%')}; */
  grid-row: ${({horizontal}) => (horizontal === 'true' ? 'span 1' : 'span 2')};
  cursor: pointer;

  &:hover ${OptionsDiv} {
    opacity: 1;
  }
  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`

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
  grid-auto-rows: 250px;
  align-items: flex-start;
  /* height: auto; */

  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
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
const SessionDetails = () => {
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(1)

  const [photoSession, setPhotoSession] = useState({})
  const {photos, getPhotos} = useContext(PhotosContext)

  useEffect(() => {
    getPhotos(params.sessionId)
  }, [params.sessionId])

  useEffect(() => {
    const getSession = async () => {
      const sessionRef = doc(db, 'photoSessions', params.sessionId)
      const res = await getDoc(sessionRef)
      console.log(res)
      setPhotoSession(res.data())
    }
    getSession()
  }, [params.sessionId])
  const nextPhoto = () => {
    console.log(photos.length, photoIndex)

    if (photoIndex < photos.length) {
      setPhotoIndex((prevIntex) => prevIntex + 1)
    }
  }
  const prevPhoto = () => {
    setPhotoIndex((prevIntex) => prevIntex - 1)
  }
  const openGallery = (index) => {
    setIsOpen(true)
    setPhotoIndex(index)
  }
  const closeModal = () => {
    setIsOpen(false)
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

      <OptionsBar />
      <Modal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        width='100vw'
        heigth='100vh'
      >
        <PhotoSlide
          imgUrl={photos[photoIndex]?.url}
          onPrev={prevPhoto}
          onNext={nextPhoto}
          onClose={closeModal}
        />
      </Modal>
      <PhotoGallery>
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            url={photo.resizedUrl}
            name={photo.name}
            photoId={photo.id}
            horizontal={photo.width > photo.height ? 'true' : 'false'}
          >
            <img src={photo.url} alt='' onClick={() => openGallery(index)} />
            <OptionsDiv>
              <button>Do koszyka</button>
            </OptionsDiv>
          </PhotoCard>
        ))}
      </PhotoGallery>
    </Container>
  )
}

export default SessionDetails
