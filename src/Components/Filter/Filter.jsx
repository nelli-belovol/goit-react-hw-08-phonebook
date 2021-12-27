import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { contactsSelectors } from 'redux/contacts';
import * as contactsActions from '../../redux/contacts/contactsAction';

import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Filter({ title }) {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);

  const handleChange = e => {
    dispatch(contactsActions.changeFilter(e.currentTarget.value));
  };

  return (
    <>
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
      >
        <TextField
          id="findname"
          label="enter search name"
          type="text"
          name="name"
          value={filter}
          autoComplete="on"
          onChange={handleChange}
        />
      </Box>
    </>
  );
}

Filter.propTypes = {
  title: PropTypes.string,
};
