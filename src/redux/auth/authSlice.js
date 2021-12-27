import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    [authOperations.logIn.pending](state, _) {
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },

    [authOperations.getInfoUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
    },
    [authOperations.resetError](state, _) {
      state.error = null;
    },
  },
});

export default authSlice.reducer;
