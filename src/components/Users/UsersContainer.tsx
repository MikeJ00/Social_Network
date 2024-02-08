import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {followAC, RootUsersType, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {RootStateRedux} from "../../redux/redux-store";

let mapStateUsersToProps = (state: RootStateRedux) => {
    return {
        users: state.users.users
    }
}
let mapDispatchPostsToProps = (dispatch: any) => {
    return {
        followClick: (userId:number) => {
            dispatch(followAC(userId))
        },
        unFollowClick: (userId:number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:UsersType[])=>{
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateUsersToProps, mapDispatchPostsToProps)(Users);