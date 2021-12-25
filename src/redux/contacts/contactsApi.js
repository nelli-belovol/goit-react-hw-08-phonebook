import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function fetchContacts() {
  const res = await axios.get('/contacts');

  return res;
}

export async function addContact(contact) {
  const res = await axios.post('/contacts', contact);

  return res;
}

export async function delContact(id) {
  const res = await axios.delete(`/contacts/${id}`);

  return res;
}

export async function updateContact(id) {
  const res = await axios.patch(`/contacts/${id}`);

  return res;
}
