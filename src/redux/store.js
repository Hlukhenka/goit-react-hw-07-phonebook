import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from 'redux/filterSlice';
import { contactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    filterValue: filterSlice.reducer,
    contacts: contactsSlice.reducer,
  },
});
