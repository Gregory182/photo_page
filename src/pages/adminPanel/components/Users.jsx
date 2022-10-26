import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import styled from 'styled-components'
import { SButton } from '../../../components/styled/Components'
import { Link, useNavigate } from 'react-router-dom'
import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  collectionGroup,
  doc,
} from 'firebase/firestore'
import { db } from '../../../firebase'
import { useState } from 'react'
import Modal from '../../../components/Modal'
import SessionForm from './SessionForm'

const StyledMenuBar = styled.div`
  padding: 20px 0px;
`

const Users = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState(null)

  const openModal = (userId) => {
    setUser(userId)
    setIsOpen(true)
  }

  const columns = [
    {
      field: 'firstName',
      headerName: 'Imię',
      width: 200,
      renderCell: ({ row }) => {
        return <Link to={row.id}>{row.firstName}</Link>
      },
    },
    {
      field: 'lastName',
      headerName: 'Nazwisko',
      width: 200,
    },
    {
      field: 'email',
      headerName: 'Adres e-mail',
      width: 200,
    },
    {
      field: 'galerie',
      headerName: 'Galerie',
      width: 100,
      renderCell: ({ row }) => (
        <span onClick={() => openModal(row.id)}>Dodaj sesję</span>
      ),
    },
  ]
  useEffect(() => {
    const fetchPhotos = async () => {
      const photosRef = collection(
        db,
        'users',
        'nmSdLtOf1fgYAuLZhYeE0H1GWXJ3',
        'galerie'
      )
      const q = query(photosRef)

      const qs = await getDocs(q)
      qs.forEach((el) => {
        console.log(el.data())
      })
    }
    fetchPhotos()
  }, [])

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getDocs(collection(db, 'users'))
      let res = []
      data.forEach((doc) => {
        res.push({ id: doc.id, ...doc.data() })
      })
      console.log(res)
      setUsers(res)
    }
    fetchUsers()
  }, [])

  return (
    <>
      <StyledMenuBar>
        <SButton onClick={() => navigate('add')}>Dodaj</SButton>
      </StyledMenuBar>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <SessionForm userId={user} />
      </Modal>
      <DataGrid style={{ height: '500px' }} columns={columns} rows={users} />
    </>
  )
}

export default Users
