import React from 'react'
import { Link } from 'react-router-dom'

const HeadlinesCard = ({ id, webTitle, fields }) => {

  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={{ pathname: `/headlines/${id}`, state: id }}>
        <div className="card-header">
          <p>{webTitle}</p>
        </div>
        <div className="image">
          <img src={fields.thumbnail} alt={webTitle} />
        </div>
      </Link>
    </div>
  )

}

export default HeadlinesCard