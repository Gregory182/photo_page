import { useContext, useEffect, useState, createContext } from 'react'
import { auth, db } from '../firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({})
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  // const getUser = async (email) => {
  //   const ref = doc(db, 'users', email)
  //   const user = await getDoc(ref)
  //   console.log(user.data())
  //   setCurrentUser(user.data())
  // }

  const login = async (email, password) => {
    const res = await signInWithEmailAndPassword(auth, email, password)
    const data = res.user
    console.log(data.admin)
    return data
  }

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const logout = () => {
    navigate('')
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        user.getIdTokenResult().then((res) => {
          user.admin = res.claims.admin
          setCurrentUser(user)
        })
      }
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}
