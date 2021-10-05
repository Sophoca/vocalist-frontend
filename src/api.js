import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.vloom.co.kr:3000/'
});

export const LoginApi = {
  isExist: (email, type) =>
    api.get('/login', {
      params: {
        email: email,
        type: type
      }
    }),
  createAccount: (response, type) =>
    api.post('/login', {
      email: response.email,
      name: response.name,
      type: type
    }),
  GoogleApi: response =>
    axios.get('https://www.googleapis.com/oauth2/v3/tokeninfo', {
      params: {
        id_token: response.tokenId
      }
    })
};
