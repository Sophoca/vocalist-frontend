import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = response => {
  console.log(response);
};

ReactDOM.render(
  <GoogleLogin
    clientId="841771247702-hnnt4vqnu9hr5mf7bgs61rbpshn6lh5a.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);
