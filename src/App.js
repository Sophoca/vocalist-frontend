import './App.css';
import GoogleLoginButton from './components/GoogleLoginButton';
import YoutubeSearch from './components/YoutubeSearch';

function App() {
  const music_lists = ['next level', '신호등'];

  return (
    <div style={{ padding: 10 }}>
      <h2>Test google login</h2>
      <GoogleLoginButton></GoogleLoginButton>
      <h2>Test youtube API</h2>
      <div style={{ display: 'flex', gap: 10, flexDirection: 'column' }}>
        {music_lists.map((el, idx) => (
          <YoutubeSearch key={idx} keyword={el}></YoutubeSearch>
        ))}
      </div>
    </div>
  );
}

export default App;
