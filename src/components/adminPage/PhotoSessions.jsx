import {Button} from '@mui/material'
import {collection, deleteDoc, doc, getDocs} from 'firebase/firestore'
import {deleteObject, ref} from 'firebase/storage'
import React, {useState} from 'react'
import {useEffect} from 'react'
import styled from 'styled-components'
import {db, storage} from '../../firebase'
import PhotoSessionCard from '../shared/PhotoSessionCard'

const StyledSessionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2.5rem;
  p {
    font-size: 1.5rem;
    color: #555;
  }
`

const StyledOptionBar = styled.div`
  display: flex;
  background-color: pink;
  padding: 1.5rem 2.5rem;
  font-size: 1.2rem;
  width: 100%;

  input {
    margin-left: 1em;
    font-size: 1rem;
    padding: 0.6em 1em;
    width: 300px;
    &::placeholder {
      color: #666;
    }
  }
`
const Wraper = styled.div`
  display: grid;
  flex-wrap: wrap;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 2rem;
`
const StyledCardContainer = styled.div``

const PhotoSessions = () => {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    const fetchSessions = async () => {
      const sessionRef = collection(db, 'photoSessions')
      const sessions = await getDocs(sessionRef)
      let res = []

      sessions.forEach((session) => {
        res.push(session.data())
      })
      setSessions(res)
      console.log(res)
    }
    fetchSessions()
  }, [])

  const deleteSession = (sessionId) => {
    const sessionStorageRef = ref(storage, `images/${sessionId}`)
    const sessionRef = doc(db, 'photoSessions', sessionId)
    deleteObject(sessionStorageRef)
    deleteDoc(sessionRef)
    const updatedSessions = sessions.filter(
      (session) => session.id !== sessionId
    )
    setSessions(updatedSessions)
  }
  return (
    <>
      <StyledSessionHeader>
        <div>
          <h1>Sesje zdjęciowe</h1>
        </div>
        <div>
          <Button variant='outlined'>Dodaj sesje</Button>
        </div>
      </StyledSessionHeader>
      <StyledOptionBar>
        <div>
          <label>Wyszukaj sesje</label>
          <input type='text' placeholder='Imię, nazwisko lub nazwa sesji' />
        </div>
      </StyledOptionBar>
      <StyledCardContainer>
        <Wraper>
          {sessions?.map((session) => (
            <PhotoSessionCard
              key={session.title}
              session={session}
              deleteSession={deleteSession}
            />
          ))}
        </Wraper>
      </StyledCardContainer>
    </>
  )
}

export default PhotoSessions
