import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsApi from './contactsApi';

// import * as contactsActions from './contactsAction';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());
//   try {
//     const response = await contactsApi.fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess(response.data));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };

// export const addContact = (name, number) => dispatch => {
//   const newContact = { name: name, phone: number };
//   dispatch(contactsActions.addContactRequest());

//   contactsApi
//     .addContact(newContact)
//     .then(({ data }) => dispatch(contactsActions.addContactSuccess(data)))
//     .catch(error => dispatch(contactsActions.addContactError(error)));
// };

// export const delContact = id => dispatch => {
//   dispatch(contactsActions.delContactRequest());

//   contactsApi
//     .delContact(id)
//     .then(() => dispatch(contactsActions.delContactSuccess(id)))
//     .catch(error => dispatch(contactsActions.delContactError(error)));
// };

//createAsyncThunk
//------------------------------------------------------------
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.addContact(newContact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const delContact = createAsyncThunk(
  'contacts/delContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await contactsApi.delContact(contactId);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
