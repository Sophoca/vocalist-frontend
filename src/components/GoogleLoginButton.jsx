import GoogleLogin from 'react-google-login';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginApi } from '../api';
import axios from 'axios';
require('dotenv').config();

const Google_Key = process.env.REACT_APP_GOOGLE_KEY;

export default function MyGoogleLoginButton() {
  const responseGoogle = async response => {
    console.log('response', response);
    try {
      const response2 = await LoginApi.isExist(response.profileObj.email, 'google');
      console.log('response2', response2);
      const response3 = response2.data.body.exist
        ? true
        : await LoginApi.createAccount(response.profileObj, 'google');
      console.log('response3', response3);
    } catch (err) {
      console.log(err);
    }

    // LoginApi.isExist(response.profileObj.email, 'google').then(response2 => {
    //   console.log(response2);
    //   const exist = response2.data;

    //   if (!exist)
    //     return LoginApi.createAccount(response.profileObj, 'google').then(response3 =>
    //       console.log(response3)
    //     );
    // });
  };

  const GoogleApi = response => {
    console.log(response);
    axios
      .get('https://www.googleapis.com/oauth2/v3/tokeninfo', {
        params: {
          id_token: response.tokenId
        }
      })
      .then(response => console.log(response));
  };

  return (
    <>
      <GoogleLogin
        clientId={Google_Key}
        onSuccess={GoogleApi}
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
