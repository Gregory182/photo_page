import React from 'react'
import { StyledImg, StyledImgCard, StyledSpanBtn } from './styled/StyledHome'

function ImageCard({ photo }) {
  return (
    <StyledImgCard>
      <StyledImg src={photo} alt='Dupa' />
      <StyledSpanBtn>Tekst</StyledSpanBtn>
    </StyledImgCard>
  )
}

export default ImageCard
