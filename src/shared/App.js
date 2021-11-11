import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

import { Home, Curation, Test, Library, Chart, Search, Setting } from '../pages';
import Navbar from 'components/Navbar';
import './App.css';

const Background = styled.div`
  width: 100%;
  min-width: ${isMobile ? '0' : '600px'};
  height: 100vh;
  // background-size: cover;
  // background-position: top center;
`;

const Container = styled.div`
  max-width: ${isMobile ? '100%' : '1180px'};
  margin: ${isMobile ? null : '0 auto'};
  padding: ${isMobile ? '10px' : '20px 30px'};
`;

const App = () => {
  return (
    <Background>
      <Navbar isMobile={isMobile} />
      <Container>
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
      </Container>
    </Background>
  );
};

export default App;
