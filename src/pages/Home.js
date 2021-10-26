import React from 'react';
import webImage from '../images/web.png';

const Home = () => {
  return (
    <img src={webImage} alt={'web image'} style={{ width: 100 + '%', bjectFit: 'cover' }}></img>
  );
};

export default Home;
