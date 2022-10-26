import React from 'react'
import styled from 'styled-components'

const PhotoGrid = styled.div`
  width: 900px;
  height: 900px;
  background-color: blue;
  margin: 0 auto;
  display: grid;
`
const styledGridItem = styled.div`
  width: 100%;
`

function PhotoPrev() {
  return (
    <PhotoGrid>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </PhotoGrid>
  )
}

export default PhotoPrev
