import { createAsyncThunk } from '@reduxjs/toolkit';

import * as authApi from './authApi';

// import { authSelectors } from './authSelectors';

const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await authApi.signUp(credentials);
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
      const { data } = await authApi.logIn(credentials);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await authApi.logOut();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const getInfoUser = createAsyncThunk(
  'auth/getInfoUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await authApi.getInfoUser(credentials);
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
