/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HeadlinesCard from './HeadlinesCard'
import SearchBar from '../search/SearchBar'
import { useLocation } from 'react-router-dom'

const HeadlinesIndex = () => {
  const { state: search } = useLocation()
  console.log('SEARCH', search)
  console.log(search === undefined)
  
  const [headlines, setHeadlines] = useState([])
  const [hasError, setHasError] = useState(false)
  const [titleText, setTitleText] = useState('Top Headlines')

  const apiKey = 'd9cff572-4c48-47ee-ac50-8130ba620b9c'

  useEffect(() => {
    const getData = async ()  => {
      try {
        if (search) {
          const { data } = await axios.get(`https://content.guardianapis.com/search?q=${search}&show-fields=thumbnail&api-key=${apiKey}`)
          setHeadlines(data.response.results)
          setTitleText(`Showing results for ${search}`)
        } else {
          const { data } = await axios.get(`https://content.guardianapis.com/search?show-fields=thumbnail&api-key=${apiKey}`)
          setHeadlines(data.response.results)
          setTitleText('Top Headlines')
        }
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getData()
  }, [search])


  return (
    <section className="section">
      <div className="container">
        {headlines.length > 0 ? 
          <>
            <h2 className="title is-1 has-text-centered">{titleText}</h2>
            <SearchBar />

            <div className="grid-container">
              {headlines.map((headline, index) => {
                return <HeadlinesCard 
                  key={index} 
                  { ...headline } />
              })} 
            </div>
          </>
          :
          <h2>
            {hasError ? 'Something has gone wrong!' : 'Loading...'}
          </h2>

        }
      </div>
    </section>
  )
}

export default HeadlinesIndex

