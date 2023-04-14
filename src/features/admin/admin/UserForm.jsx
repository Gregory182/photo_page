import React from 'react'
import {useForm} from 'react-hook-form'
import styled from 'styled-components'
import {functions} from '../../../firebase'
import {Navigate, useNavigate} from 'react-router-dom'
import CustomInput from '../../../components/ui/CustomInput'
import {httpsCallable} from 'firebase/functions'

const FormCard = styled.div`
  margin-top: 60px;
  border: 1px solid lightgray;
  padding: 20px 30px;
`
const FormControl = styled.div`
  display: flex;
  flex-direction: column;
`

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  // const navitage = useNavigate()
  const submit = async (data) => {
    console.log(data)
    const newUser = httpsCallable(functions, 'addUser')
    newUser({
      ...data,
      displayName: `${data.firstName} ${data.lastName}`,
    })
  }

  return (
    <div>
      <h2>Dodaj użytkownika</h2>
      <FormCard>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <CustomInput
              type='text'
              text='Imię'
              name='firstName'
              reg={{...register('firstName', {required: true})}}
            />
            {errors.firstName && <p>To pole nie może być puste</p>}
            <FormControl>
              <CustomInput
                type='text'
                text='Nazwisko'
                name='lastName'
                reg={{...register('lastName', {required: true})}}
              />
              {errors.lastName && <p>To pole nie może być puste</p>}
            </FormControl>
            <FormControl>
              <CustomInput
                type='email'
                text='email'
                reg={{...register('email', {required: true})}}
              />
              {errors.email && <p>To pole nie może być puste</p>}
            </FormControl>
            <FormControl>
              <CustomInput
                type='password'
                text='Hasło'
                reg={{...register('password', {required: true})}}
              />
            </FormControl>

            <input type='submit' />
          </form>
        </div>
      </FormCard>
    </div>
  )
}

export default UserForm
