/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const HeadlinesCard = ({ id, webTitle, fields }) => {
  const notify = () => toast('Story added to My News!', {
    toastId: 'toastId',
  })

  const [saved, setSaved] = useState([])
  const [newSave, setNewSave] = useState({
    title: '',
    thumbnail: '',
    id: '',
  })

  const articlesArray = []

  let thumbnail = ''


  if (fields !== undefined) {
    thumbnail = fields.thumbnail
  } else {
    thumbnail = '../../styles/images/Very_Black_screen.jpeg'
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('clicked')

    const savedArticle = {
      title: webTitle,
      thumbnail: thumbnail,
      id: id,
    }

    setSaved(savedArticle)
    setSavedToLocalStorage(savedArticle)
    setNewSave(savedArticle)
  }


  console.log('saved', saved)

  const setSavedToLocalStorage = (saved) => {
    window.localStorage.setItem('saved-article', JSON.stringify(saved))
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
        <form id='save' onClick={handleSubmit}>
          <div onClick={notify} className="footer-button" id="save">Save</div>
          <ToastContainer />
        </form>
      </div>
    </div>
  )

}

export default HeadlinesCard