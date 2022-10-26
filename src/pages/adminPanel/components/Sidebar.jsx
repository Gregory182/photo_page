import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledDevider, StyledSidebar } from './styled'

const StyledLogo = styled.div`
  margin: 36px 0px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #eee;
`
const StyledLink = styled(Link)`
  color: #eee;
  text-decoration: none;
`

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledLogo>Administracja</StyledLogo>
      <StyledDevider />
      <div>
        <ul>
          <li>
            <StyledLink to='clients'>Klienci</StyledLink>
          </li>
          <li>
            <span>Użytkownicy</span>
          </li>
          <li>
            <StyledLink to='sessions'>Secje zdjęciowe</StyledLink>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div>color :-)</div>
    </StyledSidebar>
  )
}

export default Sidebar
