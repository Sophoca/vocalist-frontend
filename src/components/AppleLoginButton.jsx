import AppleSignin from 'react-apple-signin-auth';
import { AppleLoginButton } from 'react-social-login-buttons';
require('dotenv').config();

/** Apple Signin button */
export default function MyAppleLoginButton() {
  return (
    <AppleSignin
      /** Auth options passed to AppleID.auth.init() */
      authOptions={{
        clientId: 'kr.co.vloom.web',
        scope: 'name',
        redirectURI: 'https://vloom.co.kr/appleLoginCallBack',
        state: 'state',
        nonce: 'nonce',
        usePopup: true
      }}
      /** General props */
      uiType="dark"
      onSuccess={response => console.log(response)}
      onError={error => console.error(error)}
      /** className */
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
