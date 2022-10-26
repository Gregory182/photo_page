import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../../components/ui/Button'
import { db } from '../../../firebase'

const StyledCard = styled.div`
  max-width: 350px;
  height: 380px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d5c9c9;
  border-radius: 5px;
  box-shadow: 1px 1px 12px 1px lightgray;
`

const StyledSessionHeader = styled.div`
  padding: 1rem;
  width: 100%;
  flex: 1;
  border-bottom: 1px solid #888;
  display: flex;
  justify-content: space-between;
`
const StyledSessionName = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`
const StyledSessionBody = styled.div`
  display: flex;
  flex: 8;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const ImageContainer = styled.div`
  width: 90%;
  height: 90%;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const PhotoSessionCard = ({ session, deleteSession }) => {
  return (
    <StyledCard>
      <StyledSessionHeader>
        <StyledSessionName>
          <Link to={`/admin/sessions/${session?.id}`}>{session.name}</Link>
          <small>{session.user}</small>
        </StyledSessionName>
        <div>
          <Button size='.6rem' onClick={() => deleteSession(session.id)}>
            Usuń
          </Button>
        </div>
      </StyledSessionHeader>

      <StyledSessionBody>
        <ImageContainer>
          <Image src={session.imgUrl} alt='Error' />
        </ImageContainer>
      </StyledSessionBody>
    </StyledCard>
  )
}

export default PhotoSessionCard
