/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchBar = () => {

  const [search, setSearch] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('clicked')
    console.log('handlesubmint->', newSearch)
    setSearch(newSearch)
    setNewSearch('')
  }
  console.log('search->', search)
  console.log('new search->', newSearch)

  const handleChange = (event) => {
    setNewSearch(event.target.value)
  }


  return (
    <>
      <div className="field has-addons">
        <form onSubmit={handleSubmit} >
          <div className="control">
            <input onChange={handleChange} className="input" type="text" placeholder="Search" />
          </div>
          <div className="control">
            <input className="button is-info" type="submit" />
          </div>
        </form>
      </div>
    </>
  )


}

export default SearchBar