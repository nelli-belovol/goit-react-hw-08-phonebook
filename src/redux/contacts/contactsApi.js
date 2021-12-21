import axios from 'axios';
axios.defaults.baseURL = 'https://61b7364cc95dd70017d41388.mockapi.io/';

export async function fetchContacts() {
  return axios.get('/contacts');
}

export async function addContact(contact) {
  return axios.post('/contacts', contact);
}

export async function delContact(id) {
  return axios.delete(`/contacts/${id}`);
}
