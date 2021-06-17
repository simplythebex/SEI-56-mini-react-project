/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HeadlinesCard = ({ id, webTitle, fields }) => {

  const [saved, setSaved] = useState([])
  const [newSave, setNewSave] = useState({
    title: '',
    thumbnail: '',
    id: '',
  })

  let thumbnail = ''

  if (fields !== undefined) {
    thumbnail = fields.thumbnail
  } else {
    thumbnail = '../../styles/images/Very_Black_screen.jpeg'
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('clicked')
    setNewSave({
      title: webTitle,
      thumbnail: thumbnail,
      id: id,
    })
    updateSaved()
  }

  const updateSaved = () => {
    setSaved(newSave)
    setSavedToLocalStorage(saved)
  }

  console.log('saved', saved)

  const setSavedToLocalStorage = (saved) => {
    window.localStorage.setItem('title', saved.title)
    window.localStorage.setItem('image', saved.thumbnail)
    window.localStorage.setItem('id', saved.id)
  }

  return (
    <div className="grid-item">
      <div className="header">
        <p>{webTitle}</p>
      </div>
      <div className="image">
        <img src={thumbnail} alt={webTitle} />
      </div>
      <div className="card-footer">
        <Link to={{ pathname: `/headlines/${id}`, state: id }}>
          <div className="footer-button" id="read-more">Read More</div>
        </Link>
        <form id='save' onSubmit={handleSubmit}>
          <input type="submit" className="footer-button" id="save" placeholder="save"/>
        </form>
      </div>
    </div>
  )

}

export default HeadlinesCard