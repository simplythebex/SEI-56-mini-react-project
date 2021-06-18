/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import HeadlinesCard from '../Headlines/HeadlinesCard'
import { Link } from 'react-router-dom'

const MyNews = ({ saved }) => {

  let article 

  const [hasError, setHasError] = useState(false)

  console.log(saved)

  const getTitleFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem('saved-article'))
  }

  const getData = () => {
    article = getTitleFromLocalStorage()
  }

  getData()

  return (
    <section className="section">
      <div className="container">
        <>
          <h2 className="title is-1 has-text-centered">Your Saved Stories</h2>

          {article ? 
            <div className="grid-item my-news-card">
              <div className="header">
                <p>{article.title}</p>
              </div>
              <div className="image">
                <img src={article.thumbnail} alt={article.title} />
              </div>
              <div className="card-footer">
                <Link to={{ pathname: `/headlines/${article.id}`, state: article.id }}>
                  <div className="footer-button" id="read-more">Read More</div>
                </Link> 
              </div>
            </div>
            :
            <p className="has-text-centered">You have no saved stories!</p>
          }
        </>
      </div>
    </section>
  )
}

export default MyNews