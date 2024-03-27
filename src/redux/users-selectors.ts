import {RootStateRedux} from "./redux-store";
import {createSelector} from "reselect";
import {UsersType} from "src/redux/users-reducer";

export const getUsers = (state: RootStateRedux) => {
        return state.users.users
}
export const getUsersWithoutSelectorExample = (state: RootStateRedux) => {
    return getUsers(state).filter((u: any) => true)
}
export const getUsersSelector = createSelector(getUsers, (users:  UsersType[]) => {
    return users.filter((u) => true)
})
export const getPageSize = (state: RootStateRedux) => {
    return state.users.pageSize;
}
export const getTotalUsersCount = (state: RootStateRedux) => {
    return state.users.totalUsersCount;
}
export const getCurrentPage = (state: RootStateRedux) => {
    return state.users.currentPage;
}
export const getIsFetching = (state: RootStateRedux) => {
    return state.users.isFetching;
}
export const getFollowingInProgress = (state: RootStateRedux) => {
    return state.users.followingInProgress;
}
export const getIsAuth = (state: RootStateRedux) => {
    return state.auth.isAuth;
}