import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { storage } from '../firebase'
import useStorage from '../hooks/useStorage'

const ClientPanel = (e) => {
  // const [file, setFile] = useState(null)

  // const { progress, url, error } = useStorage(file)

  const OptionsDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0;
    transition: all ease-in-out 150ms;
  `
  const PhotoCard = styled.div`
    border: 1px solid lightgray;
    border-radius: 3px;
    width: 350px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    position: relative;
    cursor: pointer;

    &:hover ${OptionsDiv} {
      opacity: 1;
    }
    img {
      width: 80%;
      max-height: 80%;
      object-fit: cover;
    }
  `

  const handleUpload = (file) => {
    const imagesRef = ref(storage, `images/${file.name}`)
    const uploadTask = uploadBytesResumable(imagesRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => () => {
        console.log(error)
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL)
        })
      }
    )
  }

  const allowedTypes = ['image/jpeg', 'image/png']
  const changeHandler = (e) => {
    let selected = e.target.files

    for (let i = 0; i < selected.length; i++) {
      handleUpload(selected[i])
    }
    // if (selected && allowedTypes.includes(selected.type)) {
    //   setFile(selected)
    //   setError(null)
    //   handleUpload()
    // } else {
    //   setFile(null)
    //   setError('Please select an image file')
    // }
  }

  return (
    <div>
      <form>
        <input multiple type='file' onChange={(e) => changeHandler(e)} />
        <button></button>
        {/* {error && <div>{error}</div>} */}
      </form>
    </div>
  )
}

export default ClientPanel
