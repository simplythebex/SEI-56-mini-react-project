import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const HeadlinesShow = () => {
  const [headline, setHeadline] = useState([])
  const id = useParams()
  console.log('param', id)

  const apiKey = 'd9cff572-4c48-47ee-ac50-8130ba620b9c'

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://content.guardianapis.com/search?ids=${id}show-fields=thumbnail&api-key=${apiKey}`)
        console.log('data', data)
        setHeadline(data.response.results)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [id])

  console.log('headline', headline)

  return (
    <>
      <div>
        <h1>{headline.webTitle}</h1>
      </div>
    </>
    
    
  )
}

export default HeadlinesShow