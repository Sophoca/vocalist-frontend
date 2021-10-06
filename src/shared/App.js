import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, AddCuration } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/add-curation" component={AddCuration} />
      </div>
    );
  }
}

export default App;
