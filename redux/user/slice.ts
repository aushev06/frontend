import { createSlice } from '@reduxjs/toolkit';
import {HYDRATE} from "next-redux-wrapper";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: undefined,
    notifications: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      return state;
    },

    setNotifications: (state, action) => {
      state.notifications = action.payload;

      return state;
    }

  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.user,
        ...action.payload.notifications,
      };
    },
  },

});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;
export const { setNotifications } = userSlice.actions;
export const { reducer: userReducer } = userSlice;
