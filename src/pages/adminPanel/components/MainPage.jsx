import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../../context/AuthContext'
import { AdminContainer } from './styled'

const Wrapper = styled.div`
  background-color: #f9f9f9;
  flex: 8;
  display: flex;
  justify-content: center;
`

const MainPage = () => {
  const { currentUser, logout } = useAuth()
  return (
    <Wrapper>
      <AdminContainer>
        {/* <h5>{currentUser?.email}?</h5>
      <button onClick={logout}>Logout</button> */}
        <Outlet />
      </AdminContainer>
    </Wrapper>
  )
}

export default MainPage
