import {RootState, UserState} from "../types";

export const selectUserState = (state: RootState): UserState => {
    return state.user
};
