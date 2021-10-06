import React from 'react';
import GoogleLoginButton from '../components/GoogleLoginButton';
import AppleLoginButton from '../components/AppleLoginButton';
import YoutubeSearch from '../components/YoutubeSearch';

const Home = () => {
  const music_lists = ['next level', '신호등'];
  return (
    <div style={{ padding: 20 }}>
      <h1>VLOOM</h1>
      {/* <div style={{ display: 'flex', gap: 10 }}></div> */}
      <h2>Test google login</h2>
      <GoogleLoginButton></GoogleLoginButton>
      <h2>Test apple login</h2>
      <AppleLoginButton></AppleLoginButton>
      {/* <h2>Test youtube API</h2>
      <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
        {music_lists.map((el, idx) => (
          <YoutubeSearch key={idx} keyword={el}></YoutubeSearch>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
