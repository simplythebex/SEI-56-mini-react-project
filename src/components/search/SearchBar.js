import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SearchBar = () => {

  const [search, setSearch] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [result, setResult] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handlesubmint', newSearch)
    setSearch(newSearch)
    setNewSearch('')
    console.log('search->', search)
    console.log('new search->', newSearch)
  }

  const handleChange = (event) => {
    setNewSearch(event.target.value)
  }
  
  const apiKey = 'd9cff572-4c48-47ee-ac50-8130ba620b9c'

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://content.guardianapis.com/search?q=${search}&show-fields=thumbnail&show-blocks=body&api-key=${apiKey}`)
        console.log('data', data)
        setResult(data.response.results)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [search])

  console.log('result -> ', result)

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