import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

import Test from 'components/Demo/Test';
import Result from 'components/Demo/Result';

const Container = styled.div`
  // width: 100%;
  padding: 0 30px;
  padding-top: ${isMobile ? '48px' : '65px'};
`;

const Demo = ({ match }) => (
  <Container className="container">
    <Route exact path={match.path} component={Test} />
    <Route path={`${match.path}/:id`} component={Result} />
  </Container>
);

export default Demo;
