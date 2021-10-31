import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/slice';
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import {directoryReducer} from "./directory/slice";

export const makeStore = () => configureStore({
  reducer: {
    user: userReducer,
    directory: directoryReducer
  },
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper<AppStore>(makeStore);

