import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import axios from 'axios'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Headlines from './components/Headlines/Headlines'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      
        <Switch>
          <Route path="/headlines">
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

