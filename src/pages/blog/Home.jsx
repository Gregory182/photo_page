import React from 'react'
import styled from 'styled-components'
import AboutMe from '../../components/AboutMe'
import ImagesSection from '../../components/ImagesSection'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

function Home() {
  return (
    <Container>
      {/* <ImagesSection /> */}
      <AboutMe />
    </Container>
  )
}

export default Home
