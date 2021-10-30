import {DirectoryState, RootState, UserState} from "../types";

export const selectThemesState = (state: RootState): DirectoryState['data']['themes'] => {
    return state.directory.data.themes
};

export const selectCategoriesState = (state: RootState): DirectoryState['data']['categories'] => {
    return state.directory.data.categories
};
