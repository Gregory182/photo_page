import React from 'react'
import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import {AdminContainer} from '../adminPage/styled'

const Wrapper = styled.div`
  background-color: #f9f9f9;
  flex: 8;
  display: flex;
  justify-content: center;
`

const MainPage = () => {
  return (
    <Wrapper>
      <AdminContainer>
        <Outlet />
      </AdminContainer>
    </Wrapper>
  )
}

export default MainPage
