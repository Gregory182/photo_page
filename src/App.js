import Header from './components/Header'
import {StyledContainer} from './components/styled/StyledContainer'
import Home from './pages/blog/Home'
import PhotoPrev from './pages/blog/PhotoPrev'
import {Globalstyles} from './styles/GlobalStyles'

import {Route, Routes, useLocation} from 'react-router-dom'
import Portfolio from './pages/blog/Portfolio'
import {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {darkTheme, lightTheme} from './styles/themes'
import Offer from './pages/offer/Offer'
import Footer from './components/Footer'
import Login from './pages/blog/Login'
import {AuthProvider} from './context/AuthContext'
import {RequireAuth, RequireAuthAdmin} from './RequireAuth'
import {PhotosContextProvider} from './context/PhotosContext'
import AdminPanel from './components/layout/AdminPanel'

import Sessions from './components/clientPage/Sessions'

import Users from './components/adminPage/Users'
import UserForm from './components/adminPage/UserForm'
import UserDetail from './components/adminPage/UserDetail'
import PhotoSessions from './components/adminPage/PhotoSessions'
import SessionPage from './components/adminPage/SessionPage'
import ClientPanel from './components/layout/ClientPanel'
import SessionDetails from './components/clientPage/SessionDetails'

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
          {!location.pathname.startsWith('/admin') &&
          !location.pathname.startsWith('/client-panel') ? (
            <Header />
          ) : null}
          <StyledContainer>
            <PhotosContextProvider>
              <Routes>
                <Route path='/' element={<h1>co jest</h1>} />
              </Routes>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<>About</>} />
                <Route
                  path='/admin'
                  element={
                    <RequireAuthAdmin>
                      <AdminPanel />
                    </RequireAuthAdmin>
                  }
                >
                  <Route path='clients' element={<Users />} />
                  <Route path='clients/:id' element={<UserDetail />} />
                  <Route path='clients/add' element={<UserForm />} />
                  <Route path='sessions' element={<PhotoSessions />} />
                  <Route path='sessions/:sessionId' element={<SessionPage />} />
                </Route>
                <Route path='oferta' element={<Offer />} />
                <Route path='login' element={<Login />} />
                <Route path='portfolio'>
                  <Route index element={<Portfolio />} />
                  <Route path=':type' element={<h1>Galery</h1>} />
                </Route>
                <Route path='/prevs' element={<PhotoPrev />} />

                <Route
                  path='/client-panel'
                  element={
                    <RequireAuth>
                      <ClientPanel />
                    </RequireAuth>
                  }
                >
                  <Route path='client-sessions' element={<Sessions />} />
                  <Route
                    path='client-sessions/:sessionId'
                    element={<SessionDetails />}
                  />
                </Route>
              </Routes>
              {/* <Footer /> */}
            </PhotosContextProvider>
          </StyledContainer>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}

export default App
