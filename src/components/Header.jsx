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
  height: 13vh;
  box-shadow: 1px 2px 5px rgba(40, 40, 40, 0.2);
  z-index: 1000;
`
const Image = styled.img`
  height: 60px;
`

const Burger = styled.div`
  display: none;
  img {
    width: 250px;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
`
const Hb = styled.div`
  position: relative;
  width: 40px;
  height: 4px;
  background-color: black;
  border-radius: 40px;
  ::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 4px;
    background-color: black;
    border-radius: 40px;
    transform: translateY(12px);
  }
  ::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 4px;
    background-color: black;
    border-radius: 40px;
    transform: translateY(-12px);
  }
`

const StyledNavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 90%;
  @media (max-width: 768px) {
    display: none;
  }
`
const StyledLink = styled(NavLink)`
  list-style: none;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0px 12px;
  color: #222;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 1080px) {
    :nth-child(4) {
      display: none;
    }
  }
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
          <StyledLink to='/home'>Start</StyledLink>
          <StyledLink to='/oferta'>Blog</StyledLink>
          <StyledLink to='/oferta'>Oferta</StyledLink>
          <StyledLink id='logo' to='/home'>
            <Image src={Logo} alt='RozPhotos' />
          </StyledLink>
          <StyledLink to='/portfolio'>Portfolio</StyledLink>
          <StyledLink to='/oferta'> O mnie</StyledLink>
          <StyledLink to='/login'>Kontakt</StyledLink>
        </StyledNavList>
        <Burger>
          <div>
            <img src={Logo} alt='RozPhotos' />
          </div>
          <Hb></Hb>
        </Burger>
      </Container>
    </StyledHeader>
  )
}

export default Header
