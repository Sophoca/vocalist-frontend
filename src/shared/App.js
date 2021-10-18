import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Curation, Test, Library, Chart, Search, Setting } from '../pages';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/chart" component={Chart} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/setting" component={Setting} />
        <Route path="/curation" component={Curation} />
        <Route path="/test" component={Test} />
      </div>
    );
  }
}

export default App;
