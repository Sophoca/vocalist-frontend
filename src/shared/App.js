import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Curation, Test, Library, Chart, Search, Setting } from '../pages';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chart" component={Chart} />
        <Route path="/library" component={Library} />
        <Route path="/search" component={Search} />
        <Route path="/setting" component={Setting} />
        <Route path="/curation" component={Curation} />
        <Route path="/test" component={Test} />
        <Route component={Home} />
      </Switch>
    </div>
  );
};

export default App;
