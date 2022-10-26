import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 3px;
  box-shadow: 1px 1px 10px 1px lightgray;
  display: flex;
  flex-direction: column;
  height: 400px;
  /* max-width: 380px; */
`

const ImageDiv = styled.div`
  align-items: center;
  color: #545454;
  cursor: pointer;
  display: flex;
  justify-content: center;

  flex: 6;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  img {
    max-width: 300px;
    max-height: 280px;
    display: block;
    margin: 0 auto;
    object-fit: contain;
  }
`
const ImageOptions = styled.div`
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 1rem;
  height: 50px;
  width: 100%;
`

const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => (props.danger ? '#ee8b8b' : '#447444')};
  border-radius: 6px;
  color: gray;
  cursor: pointer;
  padding: 0.2em 1em;
`

const PhotoCard = ({ url, name, photoId, setMainImg, deletePhoto }) => {
  return (
    <Card>
      <ImageDiv>
        <p>{name}</p>
        <img src={url} alt='zdjęcie' />
      </ImageDiv>
      <ImageOptions>
        <Button onClick={() => setMainImg(url)}>Ustaw jako główne</Button>
        <Button danger onClick={() => deletePhoto(name, photoId)}>
          Usuń
        </Button>
      </ImageOptions>
    </Card>
  )
}

export default PhotoCard
