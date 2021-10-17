import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Curation, Test } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/curation" component={Curation} />
        <Route path="/test" component={Test} />
      </div>
    );
  }
}

export default App;
