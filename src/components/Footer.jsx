import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  background-color: red;
  height: 20;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
`

const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>
}

export default Footer
