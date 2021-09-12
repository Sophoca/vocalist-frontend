import './App.css';
import GoogleLogin from 'react-google-login';

function App() {
  const responseGoogle = response => {
    console.log(response);
  };
  return (
    <div>
      <h1>소셜로그인 Test</h1>
      <GoogleLogin
        clientId="841771247702-hnnt4vqnu9hr5mf7bgs61rbpshn6lh5a.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default App;
