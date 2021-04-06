import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    fullname: '',
  },
  reducers: {
    setFullName: (state) => {
      state.fullname = 'Ваха Костоправ';
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFullName } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
