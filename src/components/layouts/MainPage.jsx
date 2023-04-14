import React from 'react'
import {Outlet} from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #f9f9f9;
  flex: 8;
  display: flex;
  justify-content: center;
`

const AdminContainer = styled.div`
  width: 80%;
  margin: 20px;
  background-color: #f9f9f9;
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
