import { Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

export const RequireAuthAdmin = ({ children }) => {
  const { currentUser } = useAuth()
  console.log(currentUser)
  return currentUser.admin ? children : <Navigate to='/' />
}
export const RequireAuth = ({ children }) => {
  const { currentUser } = useAuth()
  console.log(currentUser)
  console.log(currentUser.email)
  return currentUser.email ? children : <Navigate to='/' />
}
