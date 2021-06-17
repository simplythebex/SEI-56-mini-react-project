/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react'
import axios from 'axios'

const SearchResults = () => {

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get(`https://content.guardianapis.com/search?q=${search}&show-fields=thumbnail&show-blocks=body&api-key=${apiKey}`)
  //       // console.log('data->', data)
  //       setResult(data.response.results)
  //     } catch (err){
  //       console.log(err)
  //     }
  //   }
  //   getData()
  // }, [search])

  return (
    <h1>search results</h1>
  )

}

export default SearchResults