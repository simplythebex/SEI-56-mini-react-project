import React from 'react'
import { Link } from 'react-router-dom'

const HeadlinesCard = ({ id, webTitle, fields }) => {

  return (
    <div className="grid-item">
      <div className="header">
        <p>{webTitle}</p>
      </div>
      <div className="image">
        <img className="opacity" src={fields.thumbnail} alt={webTitle} />
      </div>
      <div className="card-footer">
        <Link to={{ pathname: `/headlines/${id}`, state: id }}>
          <div id="read-more">Read More</div>
        </Link>
      </div>
    </div>
  )

}

export default HeadlinesCard