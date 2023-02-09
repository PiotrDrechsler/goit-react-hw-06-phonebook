import { createReducer } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, setFilter } from './actions';

const storedContacts = localStorage.getItem('contacts');
const contactsInitialState = storedContacts ? JSON.parse(storedContacts) : [];
const filterInitialState = '';

export const contactsReducer = createReducer(contactsInitialState, {
  [addNewContact]: (state, action) => {
    const newState = [...state, action.payload];
    localStorage.setItem('contacts', JSON.stringify(newState));
    return newState;
  },

  [deleteContact]: (state, action) => {
    const newState = state.filter(contact => contact.id !== action.payload);
    localStorage.setItem('contacts', JSON.stringify(newState));
    return newState;
  },
});

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => (state = action.payload),
});
