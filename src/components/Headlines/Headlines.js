import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { get } from 'immer/dist/internal'

const Headlines = () => {

  const [headlines, setHeadlines] = useState([])

  const apiKey = '708821c691b64f21992c12c42861940a'
  useEffect(() => {
    const getData = async ()  => {
      try {
        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${apiKey}`)
        setHeadlines(data.articles)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log('headlines', headlines)
  console.log('headlines index 0', headlines[0])

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {headlines.map((headline, index) => {
            return (<p key={index}>{headline[index]}</p>)
          }
          )} 
        </div>
      </div>
    </section>
  )
}

export default Headlines

