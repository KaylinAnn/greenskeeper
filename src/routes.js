import React from 'react'
import { Switch, Route } from 'react-router-dom'
import dashboard from './components/dashboard/dashboard'
import more from './components/more/more'

export default (
  <Switch>
    <Route path='/' component={dashboard} />
    <Route path='/more' component={more} />
    <Route />
    <Route />
    <Route />
  </Switch>
)