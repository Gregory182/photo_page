import {collection, doc, setDoc, updateDoc} from 'firebase/firestore'
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import React from 'react'

import {db, storage} from '../../../firebase'

const AddPhotos = ({sessionId}) => {
  const handleUpload = async (file, fileName, isThumb) => {
    let photoName = isThumb ? `resized_${fileName}` : fileName
    const imagesRef = ref(storage, `images/${sessionId}/${photoName}`)
    const uploadTask = uploadBytesResumable(imagesRef, file.file)
    console.log(file.file)
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
          const photosRef = doc(
            db,
            'photoSessions',
            sessionId,
            'photos',
            fileName
          )

          if (!isThumb) {
            setDoc(
              photosRef,
              {
                id: photosRef.id,
                url: downloadURL,
                name: fileName,
                width: file.width,
                height: file.height,
              },
              {merge: true}
            )
          } else {
            setDoc(photosRef, {resizedUrl: downloadURL}, {merge: true})
          }
        })
      }
    )
  }

  const resizeHandler = async (file, size, isThumb) => {
    const config = {
      file: file,
      maxSize: size,
    }
    let name = file.name
    const resizedImage = await resizeImage(config, name)
    await handleUpload(resizedImage, name, isThumb)
  }
  const changeHandler = async (e) => {
    let selected = e.target.files

    for (let i = 0; i < selected.length; i++) {
      const file = selected[i]
      await resizeHandler(file, 1960, false)
      await resizeHandler(file, 500, true)
    }
  }
  /* Utility function to convert a canvas to a BLOB */
  var dataURLToBlob = function (dataURL) {
    var BASE64_MARKER = ';base64,'
    var parts = dataURL.split(BASE64_MARKER)
    var contentType = parts[0].split(':')[1]
    var raw = window.atob(parts[1])
    var rawLength = raw.length

    var uInt8Array = new Uint8Array(rawLength)

    for (var i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i)
    }

    return new Blob([uInt8Array], {type: contentType})
  }

  var resizeImage = function (settings) {
    var file = settings.file
    var maxSize = settings.maxSize
    var reader = new FileReader()
    var image = new Image()
    var canvas = document.createElement('canvas')

    var resize = function () {
      var width = image.width
      var height = image.height
      if (width > height) {
        if (width > maxSize) {
          height *= maxSize / width
          width = maxSize
        }
      } else {
        if (height > maxSize) {
          width *= maxSize / height
          height = maxSize
        }
      }
      canvas.width = width
      canvas.height = height
      canvas.getContext('2d').drawImage(image, 0, 0, width, height)
      var dataUrl = canvas.toDataURL('image/jpeg')

      // return canvas.toBlob('image/jpeg')

      let res = dataURLToBlob(dataUrl)
      return {file: res, width: width, height: height}
    }
    return new Promise(function (ok, no) {
      if (!file.type.match(/image.*/)) {
        no(new Error('Not an image'))
        return
      }
      reader.onload = function (readerEvent) {
        image.onload = function () {
          return ok(resize())
        }
        image.src = readerEvent.target.result
      }
      reader.readAsDataURL(file)
    })
  }

  return (
    <div>
      Add photos
      <div></div>
      <form>
        <input multiple type='file' onChange={(e) => changeHandler(e)} />
        <button></button>
        {/* {error && <div>{error}</div>} */}
      </form>
    </div>
  )
}

export default AddPhotos
