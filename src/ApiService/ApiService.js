import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const tokenConfig = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const signUp = async newUser => {
  const res = await axios.post('/users/signup', newUser);
  tokenConfig.set(res.data.token);
  return res;
};

export const logIn = async user => {
  const res = await axios.post('/users/login', user);
  tokenConfig.set(res.data.token);

  return res;
};

export const logOut = async () => {
  try {
    const res = await axios.post('/users/logout');
    tokenConfig.unset();

    return res;
  } catch (error) {
    return error;
  }
};

export const getInfoUser = async token => {
  const res = await axios.get('/users/current');
  tokenConfig.set(res.data.token);
  return res;
};

export const fetchContacts = async () => {
  try {
    const res = await axios.get('/contacts');

    return res;
  } catch (error) {
    return error;
  }
};

export async function addContact(contact) {
  try {
    const res = await axios.post('/contacts', contact);
    return res;
  } catch (error) {
    return error;
  }
}

export async function delContact(id) {
  const res = await axios.delete(`/contacts/${id}`);
  return res;
}

export async function updateContact(id) {
  const res = await axios.patch(`/contacts/${id}`);
  return res;
}
