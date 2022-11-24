import {Button} from '@mui/material'
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import {deleteObject, ref} from 'firebase/storage'
import React, {useState} from 'react'
import {useEffect} from 'react'
import styled from 'styled-components'
import {useAuth} from '../../context/AuthContext'
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

const Sessions = () => {
  const [sessions, setSessions] = useState([])
  const {currentUser} = useAuth()
  useEffect(() => {
    const fetchSessions = async () => {
      const sessionRef = collection(db, 'photoSessions')
      const q = query(sessionRef, where('user', '==', currentUser.email))
      const sessions = await getDocs(q)
      console.log(currentUser.email)
      let res = []

      sessions.forEach((session) => {
        res.push(session.data())
      })
      setSessions(res)
      console.log(res)
    }
    fetchSessions()
  }, [])

  return (
    <>
      <StyledSessionHeader>
        <div>
          <h1>Moje Sesje</h1>
        </div>
      </StyledSessionHeader>
      <StyledCardContainer>
        <Wraper>
          {sessions?.map((session) => (
            <PhotoSessionCard
              key={session.title}
              session={session}
              user={currentUser.admin}
            />
          ))}
        </Wraper>
      </StyledCardContainer>
    </>
  )
}

export default Sessions
