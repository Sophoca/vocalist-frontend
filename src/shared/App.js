import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Curation, Test, Library, Chart, Search, Setting } from '../pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/chart" component={Chart} />
        <Route exact path="/library" component={Library} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/setting" component={Setting} />
        <Route path="/curation" component={Curation} />
        <Route path="/test" component={Test} />
        <Route component={Home} />
      </Switch>
    </div>
  );
};

export default App;
