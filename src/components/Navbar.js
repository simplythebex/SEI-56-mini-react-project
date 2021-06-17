import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


const Navbar = () => {
  return (
    <>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <span className="icon">
              <i className="fas fa-home" aria-hidden="true"></i>
            </span>
          </div>
          <div className="navbar-start">
            <div className = "navbar-item">
						  <Link to="/headlinesIndex">Top Headlines</Link>
            </div>
            <div className = "navbar-item">
						  <Link to="/myNews">My News</Link>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar