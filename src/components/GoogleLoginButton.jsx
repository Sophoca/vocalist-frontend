import GoogleLogin from 'react-google-login';
import { GoogleLoginButton } from 'react-social-login-buttons';
require('dotenv').config();

const Google_Key = process.env.REACT_APP_GOOGLE_KEY;

const responseGoogle = response => {
  console.log(response);
};

export default function MyGoogleLoginButton() {
  console.log(Google_Key);
  return (
    <>
      <GoogleLogin
        clientId={Google_Key}
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <GoogleLoginButton
            onClick={renderProps.onClick}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: 300,
              fontSize: 18,
              fontFamily: 'Arial'
            }}
          />
        )}
      />
    </>
  );
}
