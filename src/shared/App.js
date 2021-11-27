import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

import { Home, Curation, Demo, Test, Library, Chart, Search, Setting } from '../pages';
import Navbar from 'components/Navbar';

const Background = styled.div`
  width: 100%;
  min-width: ${isMobile ? '0' : '500px'};
  // height: 100%;
  // background-size: cover;
  // background-position: top center;
`;

const Container = styled.div`
  // max-width: ${isMobile ? '100%' : '1180px'};
  // margin: ${isMobile ? null : '0 auto'};
  // padding: ${isMobile ? '10px' : '20px 30px'};
  width: 100%;
  padding: 0 30px;
  @media only screen and (min-width: 1180px) {
    width: 1180px;
    margin: 0 auto;
  }
`;

const App = () => {
  return (
    <Background className="background">
      <Navbar isMobile={isMobile} />
      <Container className="container">
        <Switch>
          <Route exact path="/" component={() => <Home isMobile={isMobile} />} />
          <Route path="/chart" component={Chart} />
          <Route path="/library" component={Library} />
          <Route path="/search" component={Search} />
          <Route path="/setting" component={Setting} />
          <Route path="/curation" component={Curation} />
          <Route path="/demo" component={Demo} />
          <Route path="/test" component={Test} />
          <Route component={Home} />
        </Switch>
      </Container>
    </Background>
  );
};

export default App;
