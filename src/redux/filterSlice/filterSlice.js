import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload.toLowerCase());
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const getFiltedContacts = state => state.filter;
export const filterReduser = filterSlice.reducer;
