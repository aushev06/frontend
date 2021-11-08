import {RootState, UserState} from "../types";

export const selectUserState = (state: RootState): UserState => {
    return state.user
};

export const selectUserNotifications = (state: RootState): UserState['notifications'] => {
    return state.user.notifications;
};
