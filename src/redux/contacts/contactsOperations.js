import { createAsyncThunk } from '@reduxjs/toolkit';

import * as ApiService from '../../ApiService/ApiService';
import { authSelectors } from '../../redux/auth/authSelectors';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await ApiService.fetchContacts();
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
      const { data } = await ApiService.addContact(newContact);
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
      await ApiService.delContact(contactId);

      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
