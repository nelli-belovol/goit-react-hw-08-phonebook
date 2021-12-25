import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import * as contactsActions from '../../redux/contacts/contactsAction';
import { contactsOperations } from 'redux/contacts';
import PropTypes from 'prop-types';
import s from './ContactsForm.module.scss';

export default function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.entities);
  const token = useSelector(state => state.auth.token);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const addContact = (name, number) => {
    const includesName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (includesName) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = { name: name, phone: number };
    dispatch(contactsOperations.addContact(newContact, token));
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setNumber('');
    setName('');
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input
        value={name}
        id="name"
        onChange={handleNameChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label htmlFor="number">Number</label>
      <input
        value={number}
        id="number"
        onChange={handleNumberChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      <button className={s.form__button} type="submit">
        Add Contact
      </button>
    </form>
  );
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
