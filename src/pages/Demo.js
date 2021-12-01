import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

import Test from 'components/Demo/Test';
import Result from 'components/Demo/Result';

const Container = styled.div`
  // width: 100%;
  height: 100vh;
  padding-top: ${isMobile ? '48px' : '65px'};
  @media only screen and (min-width: 800px) {
    padding-left: 30px;
    padding-right: 30px;
  } ;
`;

const Demo = ({ match }) => (
  <Container className="container">
    <Route exact path={match.path} component={Test} />
    <Route path={`${match.path}/result`} component={Result} />
  </Container>
);

export default Demo;
