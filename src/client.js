import React from 'react'
import { Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'
import ReactDOM from 'react-dom'

const component = (
  <BrowserRouter>
    <div>
      {routes}
    </div>
  </BrowserRouter>
)
ReactDOM.render(component, document.getElementById('react-view'))
