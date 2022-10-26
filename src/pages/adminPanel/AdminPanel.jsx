import React from 'react'
import MainPage from './components/MainPage'
import Sidebar from './components/Sidebar'
import { PageContainer } from './components/styled'

const AdminPanel = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainPage />
    </PageContainer>
  )
}

export default AdminPanel
