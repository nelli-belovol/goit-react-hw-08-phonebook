import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsApi from './contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsApi.fetchContacts();
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
