import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import s from './ContactsForm.module.scss';

export default function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.entities);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const addContact = (name, number) => {
    if (!name || !number) {
      alert('Please, fill in all the fields');
      return;
    }
    const includesName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (includesName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { name, number };

    dispatch(contactsOperations.addContact(newContact));
  };

  const onSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setNumber('');
    setName('');
  };

  return (
    <Box
      component="form"
      sx={[
        {
          display: 'block',
          maxWidth: '500px',
          margin: 'auto',
        },
        {
          '& .MuiTextField-root': {
            margin: 'auto',
            marginTop: '10px',
            width: '100%',
          },
        },
      ]}
      noValidate
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <div>
        <TextField
          id="name"
          label="name"
          type="text"
          name="name"
          value={name}
          autoComplete="on"
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <TextField
          id="number"
          label="number"
          type="tel"
          name="number"
          value={number}
          autoComplete="on"
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </div>
      <Button
        sx={{ margin: 'auto', marginTop: '10px', width: '100%' }}
        variant="contained"
        type="submit"
      >
        Add new contact
      </Button>
    </Box>
  );
}

ContactsForm.propTypes = {
  onSubmit: PropTypes.func,
};
