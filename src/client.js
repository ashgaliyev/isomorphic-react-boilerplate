import React from 'react'
import { Router } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

const store = configureStore()

const component = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {routes}
      </div>
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(component, document.getElementById('react-view'))
