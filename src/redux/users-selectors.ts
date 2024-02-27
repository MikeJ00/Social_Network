import React from 'react';
import {RootStateRedux} from "./redux-store";

export const getUsers = (state:RootStateRedux) =>{
    return state.users.users;
}
export const getPageSize = (state:RootStateRedux) =>{
    return state.users.pageSize;
}
export const getTotalUsersCount = (state:RootStateRedux) =>{
    return state.users.totalUsersCount;
}
export const getCurrentPage = (state:RootStateRedux) =>{
    return state.users.currentPage;
}
export const getIsFetching = (state:RootStateRedux) =>{
    return state.users.isFetching;
}
export const getFollowingInProgress = (state:RootStateRedux) =>{
    return state.users.followingInProgress;
}
export const getIsAuth = (state:RootStateRedux) =>{
    return state.auth.isAuth;
}