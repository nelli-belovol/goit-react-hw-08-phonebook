import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsOperations, contactsSelectors } from 'redux/contacts';

import PropTypes from 'prop-types';
import s from './ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const handleDelContact = id => {
    dispatch(contactsOperations.delContact(id));
  };

  const filterContact = () => {
    const normalizeFilter = filter.toLowerCase();

    const filterContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizeFilter);
    });
    return filterContacts;
  };

  return (
    <>
      <ul className={s.contacts__list}>
        {filterContact().map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={s.contacts__button}
                onClick={() => handleDelContact(contact.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  handleDel: PropTypes.func,
};
