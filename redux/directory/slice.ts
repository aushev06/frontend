import { createSlice } from '@reduxjs/toolkit';
import {HYDRATE} from "next-redux-wrapper";

export const directorySlice = createSlice({
    name: 'directory',
    initialState: {
        data: {
            categories: [],
            themes: [],
        }
    },
    reducers: {
        setDirectories: (state, action) => {
            state.data.categories = action.payload.categories;
            state.data.themes = action.payload.themes;
            return state;
        },
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.directory,
            };
        },
    },

});

// Action creators are generated for each case reducer function
export const { setDirectories } = directorySlice.actions;
export const { reducer: directoryReducer } = directorySlice;
