/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SearchBar = () => {
  const location = useLocation()

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setSearchTerm('')
  }, [location.pathname])
  

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }


  return (
    <>
      <div className="field has-addons">
        <form onSubmit={handleSubmit} >
          <div className="control">
            <input value={searchTerm} onChange={handleChange} className="input" type="text" placeholder="Search" />
          </div>
          <span>
            <div className="control search">
              <Link to={{
                pathname: '/headlinesIndex',
                state: searchTerm,
              }} 
              className="button is-primary" 
              type="submit" >
              Search
              </Link>
            </div>
          </span>
        </form>
      </div>
    </>
  )

}

export default SearchBar