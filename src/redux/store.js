import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from '../redux/reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
