import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import contactsReducer from './contactsReducer';
// import { contactsApi } from './contacts/contactsSlice';
import contacts from './contacts/contactsReducer';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: { contacts },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
