import './App.css';
import GoogleLoginButton from './components/GoogleLoginButton';
import YoutubeSearch from './components/YoutubeSearch';

function App() {
  const music_lists = ['next level', '신호등'];

  return (
    <>
      <GoogleLoginButton></GoogleLoginButton>
      <YoutubeSearch keyword="nextlevel"></YoutubeSearch>
    </>
  );
}

export default App;
