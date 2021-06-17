/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import axios from 'axios'

const HeadlinesShow = () => {
  const [headline, setHeadline] = useState([])
  const { state: id } = useLocation()

  const apiKey = 'd9cff572-4c48-47ee-ac50-8130ba620b9c'

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://content.guardianapis.com/search?ids=${id}&show-fields=thumbnail&show-blocks=body&api-key=${apiKey}`)
        // console.log('data', data)
        setHeadline(data.response.results)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [id])

  return (
    <>
      <div className="tile is-ancestor">
        {headline.map((article, index) => {
          // console.log('summary', article.blocks.body[1].bodyTextSummary)
          return (
            <>
              <div>
                <div className="is-vertical is-8">
                  <div className="tile">
                    <div className="tile is-parent">
                      <div className="tile is-child notification">
                        <figure className="image is-16-by-9">
                          <img src={article.fields.thumbnail} />
                        </figure>
                      </div>
                      <article className="tile is-child notification">
                        <h1 className="title is-1 has-text-centered" key={index}>{article.webTitle}</h1>
                        <p>{article.blocks.body.map(bodyText => bodyText.bodyTextSummary)}</p>
                        <hr />
                        <p>For more infomation follow the link...</p>
                        <a href={article.webUrl} target="_blank" rel="noreferrer">{article.webUrl}</a>

                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
    
    
  )
}

export default HeadlinesShow