import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../images/logo1.png'

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 120px;
  box-shadow: 1px 2px 5px rgba(40, 40, 40, 0.2);
  z-index: 1000;
`
const Image = styled.img`
  height: 60px;
`

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 90%;
`
const StyledLink = styled(NavLink)`
  list-style: none;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0px 12px;
  color: #222;
  padding: 10px;
  cursor: pointer;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledNavList>
          <StyledLink to=''>Start</StyledLink>
          <StyledLink to='oferta'>Blog</StyledLink>
          <StyledLink to='oferta'>Oferta</StyledLink>
          <StyledLink to=''>
            <Image src={Logo} alt='RozPhotos' />
          </StyledLink>
          <StyledLink to='portfolio'>Portfolio</StyledLink>
          <StyledLink to='oferta'> O mnie</StyledLink>
          <StyledLink to='login'>Kontakt</StyledLink>
        </StyledNavList>
      </Container>
    </StyledHeader>
  )
}

export default Header
