import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { login } = useAuth()
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleLogin = (data) => {
    console.log(data)
    try {
      login(data.email, data.password).then(() => navigate('/admin'))
    } catch (err) {
      console.log(err)
    }
  }
  //   signInWithEmailAndPassword(auth, data.email, data.password)
  //     .then((userCredentials) => {
  //       const user = userCredentials.user
  //       dispatch({ type: 'LOGIN', payload: user })
  //       navigate('/admin')
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code
  //       const errorMessage = error.mesage
  //       console.log(errorMessage)
  //     })
  // }
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label>Email</label>
          <input type='email' {...register('email')} />
        </div>
        <div>
          <label>Password</label>
          <input type='password' {...register('password')} />
        </div>
        <input type='submit' value='Zaloguj' />
      </form>
    </div>
  )
}

export default Login
