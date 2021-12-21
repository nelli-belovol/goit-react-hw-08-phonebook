import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { contactsSelectors } from 'redux/contacts';
import * as contactsActions from '../../redux/contacts/contactsAction';

import PropTypes from 'prop-types';
import s from './Filter.module.scss';

export default function Filter({ title }) {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const handleChange = e => {
    dispatch(contactsActions.changeFilter(e.currentTarget.value));
  };

  return (
    <>
      <label className={s.filter} htmlFor="findname">
        {title}
        <input
          id="findname"
          type="text"
          onChange={handleChange}
          value={filter}
        />
      </label>
    </>
  );
}

Filter.propTypes = {
  title: PropTypes.string,
};
