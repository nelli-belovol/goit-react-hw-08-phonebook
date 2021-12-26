import { createAsyncThunk } from '@reduxjs/toolkit';

import * as ApiService from '../../ApiService/ApiService';
import { authSelectors } from './authSelectors';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await ApiService.signUp(credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await ApiService.logIn(credentials);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = authSelectors.getToken(getState());
      const { data } = await ApiService.logOut(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const getInfoUser = createAsyncThunk(
  'auth/getInfoUser',
  async (credentials, { getState, rejectWithValue }) => {
    const persistedToken = authSelectors.getToken(getState());

    if (persistedToken === null) {
      return rejectWithValue();
    }
    try {
      const { data } = await ApiService.getInfoUser(
        credentials,
        persistedToken,
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const authOperations = {
  register,
  logIn,
  logOut,
  getInfoUser,
};
