import { createReducer } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, setFilter } from './actions';

const contactsInitialState = [];
const filterInitialState = '';

export const contactsReducer = createReducer(contactsInitialState, {
  [addNewContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => (state = action.payload),
});
