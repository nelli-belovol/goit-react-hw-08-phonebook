import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { createSlice } from '@reduxjs/toolkit';

import { changeFilter } from './contactsAction';

import { fetchContacts, addContact, delContact } from './contactsOperations';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [delContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [delContact.pending]: () => true,
  [delContact.fulfilled]: () => false,
  [delContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.fulfilled]: () => null,

  [addContact.rejected]: (_, action) => action.payload,
  [addContact.fulfilled]: () => null,

  [delContact.rejected]: (_, action) => action.payload,
  [delContact.fulfilled]: () => null,
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  entities,
  isLoading,
  error,
  filter,
});

//-------------------------------------------------
//Использует IMMER для мутации копии состояния
// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     entities: [],
//     isLoading: false,
//     error: null,
//     filter: '',
//   },

//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, { payload }) =>
//       (state.entities = payload),// мутация
//     [fetchContacts.pending]: state => (state.isLoading = true), // мутация
//   },
// });

// export default contactsSlice.reducer;
