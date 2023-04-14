import styled from '@emotion/styled/macro'
import {doc, getDoc, updateDoc} from 'firebase/firestore'
import React, {useContext, useEffect, useState} from 'react'
import {Link, NavLink, useParams} from 'react-router-dom'
import Modal from '../../../components/ui/Modal'
import {Button} from '../../../components/ui/Button/Button'
import {PhotosContext} from '../../../context/PhotosContext'
import {db} from '../../../firebase'
import PhotoSlide from '../../../components/shared/PhotoSlide'
import {GrBasket} from 'react-icons/gr'

import {useFirestore} from '../../../hooks/userFirestore'

const OptionsDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  background: ${({dodany}) => (dodany ? '#f9f9f9' : '')};
  opacity: ${({dodany}) => (dodany == true ? 1 : 0)};
  transition: all ease-in-out 150ms;
  z-index: 10;
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

const Container = styled.div`
  /* width: 1000px; */
`
const SessionHeader = styled.div`
  background-color: #f9f9f9;
  position: sticky;

  top: 0;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  z-index: 20;
`
const HeaderCheckoutSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const SNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  border: 1px solid #000;
  padding: 14px;
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.2rem;
  margin: 40px 0 160px 0;
  padding: 5px;

  @media (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }
`

const OptionsBar = styled.div`
  height: 50px;
  border: 1px solid lightgray;
  margin-top: 20px;
  display: flex;
  ul {
    display: flex;
    /* background-color: red; */
    align-items: center;
    gap: 10px;
    li {
      list-style: none;
    }
  }
`
const SessionDetails = () => {
  const {sessionId} = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(1)
  const [selectedCount, setSelectedCount] = useState(0)

  const [photoSession, setPhotoSession] = useState({})
  const {addPhotoToBasket} = useContext(PhotosContext)
  const {docs: photos, selectedPhotosNumber} = useFirestore(
    `photoSessions/${sessionId}/photos`
  )

  useEffect(() => {
    // getPhotos(sessionId)
  }, [sessionId])

  useEffect(() => {
    const getSession = async () => {
      const sessionRef = doc(db, 'photoSessions', sessionId)
      const res = await getDoc(sessionRef)
      console.log(res)
      setPhotoSession(res.data())
    }
    getSession()
  }, [])

  const b = () => {
    let num = photos.reduce((acc, photo) => {
      return acc + photo.inBasket
    }, 0)
    console.log(num)
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
  const openGallery = (index) => {
    setIsOpen(true)
    setPhotoIndex(index)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  const addToBasket = (sessionId, photoId, isInBasket) => {
    const action = isInBasket ? 'remove' : 'add'
    addPhotoToBasket(sessionId, photoId, action)
    b()
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
        <HeaderCheckoutSection>
          <GrBasket style={{width: '2em', height: '2em'}} />
          <p>{selectedPhotosNumber} </p>
          <Button>Wyślij Sesje</Button>
        </HeaderCheckoutSection>
      </SessionHeader>

      <OptionsBar>
        <ul>
          <li>
            <SNavLink to='info'>Informacje o sesji</SNavLink>
          </li>
          <li>Zdjęcia</li>
          <li>Zgody i dokumenty</li>
        </ul>
      </OptionsBar>
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
        {photos?.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            url={photo.resizedUrl}
            name={photo.name}
            photoId={photo.id}
            horizontal={photo.width > photo.height ? 'true' : 'false'}
          >
            <img src={photo.url} alt='' onClick={() => openGallery(index)} />
            <OptionsDiv dodany={photo.inBasket}>
              <button
                onClick={() => addToBasket(sessionId, photo.id, photo.inBasket)}
              >
                {photo.inBasket ? 'Usuń z koszyka' : 'Dodaj do koszyka'}
              </button>
            </OptionsDiv>
          </PhotoCard>
        ))}
      </PhotoGallery>
    </Container>
  )
}

export default SessionDetails
