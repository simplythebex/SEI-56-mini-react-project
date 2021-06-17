import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import SearchBar from './search/SearchBar'

const Navbar = () => {
  return (
    <>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <FontAwesomeIcon icon='fa-solid fa-house' />
          </div>
          <div className="navbar-start">
            <div className = "navbar-item">
						  <Link to="/">Home</Link>
            </div>
            <div className = "navbar-item">
						  <Link to="/headlinesIndex">Top Headlines</Link>
            </div>
            <div className = "navbar-item">
						My News
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <SearchBar />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar