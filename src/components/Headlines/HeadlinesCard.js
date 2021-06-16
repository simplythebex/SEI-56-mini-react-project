import React from 'react'
import { Link } from 'react-router-dom'

const HeadlinesCard = ({ publishedAt, title, urlToImage }) => {

  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/headlines/${publishedAt}`}>
        <div className="card-header">
          <p>{title}</p>
        </div>
        <div className="image">
          <img src={urlToImage} alt="title" />
        </div>
      </Link>
    </div>
  )

}

export default HeadlinesCard