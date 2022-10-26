import Header from './components/Header'
import { StyledContainer } from './components/styled/StyledContainer'
import Home from './pages/Home'
import PhotoPrev from './pages/PhotoPrev'
import { Globalstyles } from './styles/GlobalStyles'

import { Route, Routes, useLocation } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/themes'
import Offer from './pages/offer/Offer'
import ClientPanel from './pages/ClientPanel'
import Footer from './components/Footer'
import AdminPanel from './pages/adminPanel/AdminPanel'
import Users from './pages/adminPanel/components/Users'
import UserForm from './pages/adminPanel/components/UserForm'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import { RequireAuth } from './RequireAuth'
import UserDetail from './pages/adminPanel/components/UserDetail'
import PhotoSessions from './pages/adminPanel/components/PhotoSessions'
import SessionPage from './pages/adminPanel/SessionPage'

function App() {
  const [theme, setTheme] = useState('light')
  // const location = useLocation()
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const location = useLocation()

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <AuthProvider>
          <Globalstyles />
          <Routes>
            {console.log(location.pathname)}
            <Route path='adm' element={<div>ok</div>} />
          </Routes>
          {!location.pathname.startsWith('/admin') && <Header />}
          <StyledContainer>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<>About</>} />
              <Route
                path='/admin'
                element={
                  <RequireAuth>
                    <AdminPanel />
                  </RequireAuth>
                }
              >
                <Route path='clients' element={<Users />} />
                <Route path='clients/:id' element={<UserDetail />} />
                <Route path='sessions/:sessionId' element={<SessionPage />} />
                <Route path='clients/add' element={<UserForm />} />
                <Route path='sessions' element={<PhotoSessions />} />
              </Route>
              <Route path='/oferta' element={<Offer />} />
              <Route path='/login' element={<Login />} />
              <Route path='/portfolio'>
                <Route index element={<Portfolio />} />
                <Route path=':type' element={<h1>Galery</h1>} />
              </Route>
              <Route path='/prevs' element={<PhotoPrev />} />
              <Route path='/client-panel' element={<ClientPanel />} />
            </Routes>
            {/* <Footer /> */}
          </StyledContainer>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
