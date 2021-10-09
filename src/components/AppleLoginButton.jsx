import AppleSignin from 'react-apple-signin-auth';
import { AppleLoginButton } from 'react-social-login-buttons';
import { LoginApi } from '../api';
require('dotenv').config();

/** Apple Signin button */
export default function MyAppleLoginButton() {
  const responseApple = async response => {
    try {
      const response1 = await LoginApi.AppleApi(response);
      console.log(response, response1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppleSignin
      /** Auth options passed to AppleID.auth.init() */
      authOptions={{
        clientId: 'kr.co.vloom.web',
        scope: 'email name',
        redirectURI: 'https://vloom.co.kr/appleLoginCallBack',
        state: '',
        nonce: 'nonce',
        usePopup: true
      }}
      /** General props */
      uiType="dark"
      onSuccess={responseApple}
      onError={responseApple}
      className="apple-auth-btn"
      render={renderProps => (
        <AppleLoginButton
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
  );
}
