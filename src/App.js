import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import { Loading } from './Components/Loading';
import ContactsForm from 'Components/ContactsForm/ContactsForm';
import ContactsList from 'Components/ContactList/ContactList';
import Filter from 'Components/Filter/Filter.jsx';

function App() {
  const loading = useSelector(contactsSelectors.isLoading);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter title="Find contacts by name" />
      <ContactsList />
      {loading && <Loading />}
    </div>
  );
}

export default App;
