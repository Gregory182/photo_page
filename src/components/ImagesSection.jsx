import React from 'react'
import ImageCard from './ImageCard'

import { StyledPhotoSection } from './styled/StyledHome'
import b1 from '../images/b1.jpg'
import b2 from '../images/b2.jpg'
import b3 from '../images/b3.jpg'

function ImagesSection() {
  return (
    <StyledPhotoSection>
      <ImageCard photo={b1} />
      <ImageCard photo={b2} />
      <ImageCard photo={b3} />
    </StyledPhotoSection>
  )
}

export default ImagesSection
