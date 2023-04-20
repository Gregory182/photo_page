import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import CustomInput from '../../components/ui/CustomInput'
import {useAuth} from '../../context/AuthContext'

const Form = styled.form``

const Bg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05),
    rgba(0, 0, 0, 0.05) 0 0.625rem 0.9375rem -0.3125rem,
    rgba(0, 0, 0, 0.04) 0 0.4375rem 0.4375rem -0.3125rem; */
`

const LoginContainer = styled.div`
  align-items: center;
  border: 1px solid #243a3f50;
  box-shadow: 0px 1px 10px #243a3f50;
  border-radius: 6px;
  display: flex;
  height: 330px;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  @media (max-width: 768px) {
    border: none;
    box-shadow: none;
  }
`
const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`

const Input = styled.input`
  padding: 10px 12px;
  width: 100%;
  margin-top: 20px;
  border: 2px solid #243a3f80;
  color: #243a3f;
  background-color: white;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 5px;
  transition: all ease 200ms;
  &:hover {
    background-color: #1a4f5b;
    color: white;
  }
`
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()
  const {login, currentUser} = useAuth()
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (data) => {
    console.log(data)
    try {
      await login(data.email, data.password).then((user) => {
        console.log(user)
        console.log(user.admin)
        if (user.admin) {
          navigate('/admin')
        } else {
          navigate('/client-panel')
        }
      })
    } catch (err) {
      console.log(err)
      setError(true)
    }
  }

  // useEffect(() => {
  //   setError(false)
  // }, [])

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
    <Bg>
      <LoginContainer>
        <h2>Zaloguj się</h2>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <FormControl>
            <CustomInput
              type='email'
              text='email'
              reg={{...register('email', {required: true})}}
            />
            {errors.email && <p>Pole email musi być wypełnione</p>}
          </FormControl>
          <FormControl>
            <CustomInput
              type='password'
              text='Hasło'
              reg={{...register('password', {required: true})}}
            />
            {errors.email && <p>To pole musi być wypełnione</p>}
          </FormControl>
          {error ? <p>Błędne hasło lub login.</p> : null}
          <Input type='submit' value='Zaloguj' />
        </Form>
      </LoginContainer>
    </Bg>
  )
}

export default Login
