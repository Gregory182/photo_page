import { Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

export const RequireAuth = ({ children }) => {
  const { currentUser } = useAuth()
  return currentUser ? children : <Navigate to='/' />
}
