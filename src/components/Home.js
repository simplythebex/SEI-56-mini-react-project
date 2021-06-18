import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="hero is-fullheight-with-navbar">
      <div className="hero-body">
        <Link to="/headlinesIndex">        
          <div className="title-box">
            <h1 className="title is-1 has-text-centered">NewsApp.</h1>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Home