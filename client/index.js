'use strict';

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'

const Main = (props) => (
  <div>
    <div>Main page</div>
    { props.children }
  </div>
)

const One = () => <div>First page</div>
const Two = () => <div>Second page</div>

render((
  <Router history={ createHistory() }>
    <Route path="/" component={ Main }>
      <IndexRoute component={ One } />
      <Route path="two" component={ Two } />
    </Route>
  </Router>
), document.getElementById('root'))
