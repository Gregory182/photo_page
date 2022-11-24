import {collection, doc, setDoc} from 'firebase/firestore'
import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {db} from '../../firebase'

const SessionForm = ({userId}) => {
  const {register, handleSubmit} = useForm()
  const navigate = useNavigate()

  const submit = async (data) => {
    console.log('proba dodania')
    const galeryRef = doc(collection(db, 'photoSessions'))
    const session = {
      id: galeryRef.id,
      name: data.sessionName,
      user: userId,
    }
    console.log(session)
    await setDoc(galeryRef, session)
    navigate(`/admin/sessions/${session.id}`)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>Nazwa</label>
          <input
            type='text'
            {...register('sessionName')}
            placeholder='Nazwa sesji'
          />
          <input type='submit' value='Dodaj sesję' />
        </div>
      </form>
    </div>
  )
}

export default SessionForm
