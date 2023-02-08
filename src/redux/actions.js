import { createAction } from '@reduxjs/toolkit';

export const addNewContact = createAction('contact/addNewContact');

export const deleteContact = createAction('contact/deleteContact');

export const setFilter = createAction('filter/setFilter');
