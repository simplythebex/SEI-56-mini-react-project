import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HeadlinesCard from './HeadlinesCard'

const HeadlinesIndex = () => {

  const [headlines, setHeadlines] = useState([])
  const [hasError, setHasError] = useState(false)

  const apiKey = '708821c691b64f21992c12c42861940a'
  useEffect(() => {
    const getData = async ()  => {
      try {
        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${apiKey}`)
        setHeadlines(data.articles)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getData()
  }, [])

  console.log('headlines', headlines)
  console.log('headlines index 0', headlines)

  return (
    <section className="section">
      <div className="container">
        {headlines.length > 0 ? 
          <>
            <h2 className="title is-1 has-text-centered">Top Headlines</h2>
            <div className="columns is-multiline">
              {headlines.map((headline, index) => {
                return <HeadlinesCard key={index} {...headline}/>
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

