/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios'

const HeadlinesShow = () => {
  const [headline, setHeadline] = useState([])
  const { state: id } = useLocation()
  const [hasError, setHasError] = useState(false)

  const apiKey = 'd9cff572-4c48-47ee-ac50-8130ba620b9c'

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://content.guardianapis.com/search?ids=${id}&show-fields=thumbnail&show-blocks=body&api-key=${apiKey}`)
        // console.log('data', data)
        setHeadline(data.response.results)
      } catch (err){
        setHasError(true)
      }
    }
    getData()
  }, [id])  

  return (
    <>
      {headline.length > 0 ? 
        <>
          <div className="article-box tile is-ancestor">
            {headline.map((article, index) => {
              // console.log('summary', article.blocks.body[1].bodyTextSummary)
              return (
                <div key={index}>
                  <div className="article-container-big notification">
                    <h1 className="title is-1 has-text-centered">{article.webTitle}</h1>
                    <figure className="show-image image is-16-by-9">
                      <img src={article.fields.thumbnail} />
                    </figure>
                    <article className="notification">
                      <p className="has-text-centered">{article.blocks.body[0].bodyTextSummary}</p>
                      <hr />
                    </article>
                    <p className="follow-link has-text-centered">For more infomation <a id="info-link" href={article.webUrl} target="_blank" rel="noreferrer">click here</a></p>
                  </div>
                </div>

              )
            })}
          </div>
        </>
        :
        <h2>
          {hasError ? 'Something has gone wrong!' : 'Loading...'}
        </h2>
      }
    </>
    
      
  )
}

export default HeadlinesShow