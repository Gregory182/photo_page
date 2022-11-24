import React, {useEffect} from 'react'
import {GoChevronLeft, GoChevronRight} from 'react-icons/go'
import styled from 'styled-components'

const Image = styled.img`
  display: block;
  max-width: 90vw;
  max-height: 80vh;
`

const PhotoSlide = ({imgUrl, onPrev, onNext, onClose}) => {
  const pressHandler = (e) => {
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'Escape') onClose()
  }
  useEffect(() => {
    window.addEventListener('keydown', pressHandler)

    return () => {
      window.removeEventListener('keydown', pressHandler)
    }
  }, [])

  return (
    <div>
      <div>
        <GoChevronLeft onClick={onPrev} />
        <GoChevronRight onClick={onNext} />
        <Image src={imgUrl} alt='' />
      </div>
    </div>
  )
}

export default PhotoSlide
