import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import MainPage from './MainPage'
import Sidebar from './Sidebar'
import {PageContainer} from '../adminPage/styled'

const ClientPanel = (e) => {
  return (
    <PageContainer>
      <Sidebar />
      <MainPage />
    </PageContainer>
  )
}

export default ClientPanel
