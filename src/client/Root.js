import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';
import Menu from '../components/Menu';

const Root = () => (
  <BrowserRouter>
    <Menu></Menu>
    <App />
  </BrowserRouter>
);

export default Root;
