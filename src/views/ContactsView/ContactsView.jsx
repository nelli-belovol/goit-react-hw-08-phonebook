import ContactsForm from '../../Components/ContactsForm/ContactsForm';
import ContactsList from '../../Components/ContactList/ContactList';
import Filter from '../../Components/Filter/Filter';
import s from './ContactsView.module.scss';

export default function ContactsView() {
  return (
    <div className={s.ontactsView}>
      <ContactsForm />

      <Filter title="Find contacts by name" />
      <ContactsList />
    </div>
  );
}
