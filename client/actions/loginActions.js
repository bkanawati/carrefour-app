import axios from 'axios';

export function userloginRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData);
  }
}