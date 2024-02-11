import React from 'react';
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import {RootStateRedux} from "../../redux/redux-store";
import {UsersClass} from "./UsersClass";

let mapStateUsersToProps = (state: RootStateRedux) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}
let mapDispatchPostsToProps = (dispatch: any) => {
    return {
        followClick: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollowClick: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(currentPage:number) =>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount:number) =>{
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}
export const UsersContainer = connect(mapStateUsersToProps, mapDispatchPostsToProps)(UsersClass);