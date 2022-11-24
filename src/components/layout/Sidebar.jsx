import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {useAuth} from '../../context/AuthContext'
import SidebarLink from './SidebarLink'
import {StyledDevider, StyledSidebar} from '../adminPage/styled'
import {BiLogOut} from 'react-icons/bi'
import {IoMdPhotos} from 'react-icons/io'

const StyledLogo = styled.div`
  margin: 36px 0px;
  font-weight: 600;
  letter-spacing: 2px;
  color: #eee;
`

const SidebarEl = styled.div`
  display: flex;
  align-items: center;
`

const Sidebar = () => {
  const {currentUser, logout} = useAuth()
  return (
    <StyledSidebar>
      <StyledLogo>Administracja</StyledLogo>
      <StyledDevider />
      <div>
        <ul>
          {currentUser.admin === true ? (
            <>
              <SidebarLink linkTo='clients' text='Klienci' />
              <SidebarLink linkTo='sessions' text='Sesje zdjęciowe' />
            </>
          ) : (
            <>
              <SidebarLink linkTo='client-sessions' text='Sesje zdjęciowe' />
            </>
          )}

          <li onClick={logout}>
            <BiLogOut />
            Wyloguj
          </li>
        </ul>
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
