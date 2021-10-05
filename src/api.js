import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.vloom.co.kr:3000/'
});

export const LoginApi = {
  isExsit: (email, type) =>
    api.get('/login', {
      params: {
        email: email,
        type: type
      }
    })
};
