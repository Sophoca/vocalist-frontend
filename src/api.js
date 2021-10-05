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
    })
};
