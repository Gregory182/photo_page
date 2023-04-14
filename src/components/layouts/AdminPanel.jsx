import React from 'react'

import MainPage from './MainPage'
import Sidebar from './Sidebar'
import {PageContainer} from '../../features/admin/admin/styled'

const AdminPanel = () => {
  return (
    <PageContainer>
      <Sidebar />
      <MainPage />
    </PageContainer>
  )
}

export default AdminPanel
