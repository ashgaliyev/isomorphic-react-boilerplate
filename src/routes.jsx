import React from 'react'
import { Switch, Route } from 'react-router'
import App from './components/App/'
import MainPage from './components/MainPage/'
import AboutPage from './components/AboutPage/'

export default (
  <App>
    <Switch>
      <Route exact component={MainPage} path="/" />
      <Route component={AboutPage} path="/about" />
    </Switch>
  </App>
)
