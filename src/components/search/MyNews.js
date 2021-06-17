/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import HeadlinesCard from '../Headlines/HeadlinesCard'
import { Link } from 'react-router-dom'

const MyNews = ({ saved }) => {

  let title 
  let thumbnail
  let id

  const [hasError, setHasError] = useState(false)

  console.log(saved)

  const getTitleFromLocalStorage = () => {
    return window.localStorage.getItem('title')
  }

  const getThumbnailFromLocalStorage = () => {
    return window.localStorage.getItem('thumbnail')
  }

  const getIdFromLocalStorage = () => {
    return window.localStorage.getItem('id')
  }

  const getData = () => {
    title = getTitleFromLocalStorage()
    thumbnail = getThumbnailFromLocalStorage()
    id = getIdFromLocalStorage()
  }

  getData()

  return (
    <section className="section">
      <div className="container">
        <>
          <h2 className="title is-1 has-text-centered">Your Saved Stories</h2>

          <div className="grid-item">
            <div className="header">
              <p>{title}</p>
            </div>
            <div className="image">
              <img src={thumbnail} alt={title} />
            </div>
            <div className="card-footer">
              <Link to={{ pathname: `/headlines/${id}`, state: id }}>
                <div className="footer-button" id="read-more">Read More</div>
              </Link>
            </div>
          </div>
        </>
      </div>
    </section>
  )
}

export default MyNews