import React from 'react'
import { render } from 'react-dom'
import  { Router, Route, hashHistory } from 'react-router'
import Home from './home'
import Contact from './contact'

render(
  (
    <Router history={hashHistory}>
      <Route path="/" component={ Home }></Route>
      <Route path="/contact/:name/:email/:phone/:location" component={ Contact }></Route>
    </Router>
   ),
  document.getElementById('app')
)
