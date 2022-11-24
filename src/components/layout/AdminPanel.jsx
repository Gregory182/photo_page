import React from 'react'
import MainPage from './MainPage'
import Sidebar from './Sidebar'
import {PageContainer} from '../adminPage/styled'

const AdminPanel = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainPage />
    </PageContainer>
  )
}

export default AdminPanel
