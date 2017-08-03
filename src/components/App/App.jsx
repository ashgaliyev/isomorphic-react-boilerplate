import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const App = props =>
  <div>
    <nav>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
    </nav>
    {props.children}
  </div>

export default App
