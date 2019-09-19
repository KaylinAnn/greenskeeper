import React from 'react'
import { Switch, Route } from 'react-router-dom'
import dashboard from './components/dashboard/dashboard'
import More from './components/more/more'

export default (
  <Switch>
    <Route path='/more' component={More} />
    <Route path='/' component={dashboard} />
  </Switch>
)