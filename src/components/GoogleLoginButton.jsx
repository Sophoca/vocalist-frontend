import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginApi } from '../api';
require('dotenv').config();

const Google_Key = process.env.REACT_APP_GOOGLE_KEY;

export default function MyGoogleLoginButton() {
  const responseGoogle = response => {
    console.log(response);
    LoginApi.isExist(response.profileObj.email, 'google').then(response2 => {
      console.log(response2);
      const exist = response2.data;

      if (!exist)
        return LoginApi.createAccount(response.profileObj, 'google').then(response3 =>
          console.log(response3)
        );
    });
  };

  return (
    <>
      <GoogleLogin
        clientId={Google_Key}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <GoogleLoginButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
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
