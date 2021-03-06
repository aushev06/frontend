import {Category, Comment, Likeable, Notification, PostData, Theme, User} from "../interfaces";

export enum LoadingState {
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface UserState {
    data: User | null;
    notifications: Notification<Comment | PostData | Likeable>[]
    status: LoadingState;
    authErrorMessage?: string;
}

export interface DirectoryState {
    data: {
        categories: Category[],
        themes: Theme[]
    }
}

export interface RootState {
    user: UserState
    directory: DirectoryState
}
