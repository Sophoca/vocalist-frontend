import GoogleLogin from 'react-google-login';
require('dotenv').config();

const Google_Key = process.env.REACT_APP_GOOGLE_KEY;

const responseGoogle = response => {
  console.log(response);
};

export default function GoogleLoginButton() {
  return (
    <>
      <h2>Test google login</h2>
      <GoogleLogin
        clientId={Google_Key}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
}
