'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history'

const history = useBasename(createHistory)({
  basename: '/'
})

const container = document.createElement('div');

document.body.appendChild(container);

// const Main = (props) => (
//   <div>
//     <div>Main page</div>
//     { props.children }
//   </div>
// );

// const One = () => <div>First page</div>;
// const Two = () => <div>Second page</div>;

class Main extends Component {
  render() {
    return (
      <div>
        <div>Main page</div>
        { this.props.children }
      </div>
    );
  }
}

class One extends Component {
  render() {
    return <div>One page</div>;
  }
}

class Two extends Component {
  render() {
    return <div>Two page</div>;
  }
}

render((
  <Router history={ history }>
    <Route path="/two" component={ Two } />
    <Route path="/" component={ Main }>
      <IndexRoute component={ One } />
      <Route path="two" component={ Two } />
    </Route>
  </Router>
), container);
