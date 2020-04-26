import api from './api';

export function isAutenticated() {
  const token = localStorage.getItem('token');
  console.log(token);
  if (!token) {
    return false;
  }
  return true;
  // try {
  //   const response = api.get('/checktoken', (Headers.authorization = token));
  // } catch (error) {
  //   console.log(error.response);
  //   return false;
  // }
  // return true;
}
