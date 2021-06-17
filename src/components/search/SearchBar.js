import React, { useState } from 'react'

const SearchBar = () => {

  const [newSearch, setNewSearch] = useState('')

  const handleSubmit = () => {
    // event.preventDefault()
    console.log(newSearch)
  }
  const handleChange = (event) => {
    // console.log(event.target.value)
    setNewSearch(event.target.value)
  }
  
  // console.log(newSearch)
  
  //   const handleChange = (event) => {
  //   // const donutToAdd = { ...newDonut, [e.target.name]: e.target.value }
  //   s
  // }
  //   const handleSubmit = (event) => {
  //   // prevent refresh
  //   event.preventDefault()
  //   // current donut list + new donut added
  //   setDonuts([...donuts, newDonut])
  //   // cleared the form
  //   setNewDonut({ flavor: '', style: '' })
  // }

  return (
    <>
      <div className="field has-addons">
        <form >
          <div className="control">
            <input onChange={handleChange} className="input" type="text" placeholder="Search" />
          </div>
          <div className="control">
            <a onClick={handleSubmit} className="button is-info">
            Search
            </a>
          </div>
        </form>
      </div>
    </>
  )


}

export default SearchBar