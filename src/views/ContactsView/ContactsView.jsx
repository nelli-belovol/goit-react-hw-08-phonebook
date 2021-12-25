import ContactsForm from '../../Components/ContactsForm/ContactsForm';
import ContactsList from '../../Components/ContactList/ContactList';
import Filter from '../../Components/Filter/Filter';

export default function ContactsView() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter title="Find contacts by name" />
      <ContactsList />
    </>
  );
}
