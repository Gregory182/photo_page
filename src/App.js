import { useState } from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Globalstyles } from "./styles/GlobalStyles";

import Portfolio from "./features/blog/portfolio/Portfolio";

import { darkTheme, lightTheme } from "./styles/themes";
import Offer from "./features/blog/offer/Offer";
import Login from "./features/auth/Login";
import { AuthProvider } from "./context/AuthContext";
import { RequireAuth, RequireAuthAdmin } from "./RequireAuth";
import { PhotosContextProvider } from "./context/PhotosContext";

import AboutMe from "./features/blog/about/AboutMe";
import AdminPanel from "./components/layouts/AdminPanel";
import Sessions from "./features/admin/client/Sessions";
import Users from "./features/admin/admin/Users";
import UserForm from "./features/admin/admin/UserForm";
import UserDetail from "./features/admin/admin/UserDetail";
import PhotoSessions from "./features/admin/admin/PhotoSessions";
import SessionPage from "./features/admin/admin/SessionPage";
import ClientPanel from "./components/layouts/ClientPanel";
import SessionDetails from "./features/admin/client/SessionDetails";
import Sidebar from "./components/layouts/Sidebar";

import { BlogLayout } from "./components/layouts/BlogLayout";
import Contact from "./features/blog/contact/Contact";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <AuthProvider>
          <Globalstyles />

          <PhotosContextProvider>
            <Routes>
              <Route element={<BlogLayout />}>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/about" element={<Offer />} />
                <Route path="/home" element={<AboutMe />} />
                <Route path="/oferta" element={<Offer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/portfolio">
                  <Route index element={<Portfolio />} />
                  <Route path=":type" element={<h1>Galery</h1>} />
                </Route>
              </Route>

              <Route
                path="/admin"
                element={
                  <RequireAuthAdmin>
                    <AdminPanel />
                  </RequireAuthAdmin>
                }
              >
                <Route path="clients" element={<Users />} />
                <Route path="clients/:id" element={<UserDetail />} />
                <Route path="clients/add" element={<UserForm />} />
                <Route path="sessions" element={<PhotoSessions />} />
                <Route path="sessions/:sessionId" element={<SessionPage />} />
              </Route>

              <Route
                path="/client-panel"
                element={
                  <RequireAuth>
                    <ClientPanel />
                  </RequireAuth>
                }
              >
                <Route path="client-sessions" element={<Sessions />} />
                <Route
                  path="client-sessions/:sessionId"
                  element={<SessionDetails />}
                />
              </Route>
            </Routes>
          </PhotosContextProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}



const PhotoAppLaylout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default App;
