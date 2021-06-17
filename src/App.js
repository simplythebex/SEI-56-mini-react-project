import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import axios from 'axios'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Headlines from './components/Headlines/HeadlinesIndex'
import HeadlinesShow from './components/Headlines/HeadlinesShow'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      
        <Switch>
          <Route path="/headlines/:id">
            <HeadlinesShow />
          </Route>
          <Route path="/headlinesIndex">
            <Headlines />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default App

