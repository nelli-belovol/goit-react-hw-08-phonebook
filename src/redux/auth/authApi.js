import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUp = async newUser => {
  const res = await axios.post('/users/signup', newUser);
  token.set(res.data.token);
  return res;
};

export const logIn = async user => {
  const res = await axios.post('/users/login', user);
  token.set(res.data.token);
  console.log(axios.defaults.headers.common.Authorization);
  return res;
};

export const logOut = async () => {
  const res = await axios.post('/users/logout');
  token.unset();
  return res;
};

export const getInfoUser = async () => {
  const res = await axios.get('/users/current');
  token.set(res.data.token);
  return res;
};
