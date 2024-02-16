import React from 'react';
import {connect} from "react-redux";
import {changeToggleProgressAC, followTC, getUsersTC, unFollowTC, UsersType} from "../../redux/users-reducer";
import {UsersFunc} from "./UsersFunc";
import {Preloader} from "../common/Preloader/Preloader";

type RootUsersTypeForComponent = {
    users: UsersType[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    updateToggle: (followingInProgress: boolean, userId: number) => void
    followingInProgress: []
    getUsers: (currentPage: number, totalUsersCount: number) => void
    successFollow: (userId: number) => void
    successUnFollow: (userId: number) => void
}

class UsersContainerClassComponent extends React.Component<RootUsersTypeForComponent, any> {
    componentDidMount() {
        debugger
        this.props.getUsers(this.props.currentPage, this.props.totalUsersCount)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.totalUsersCount)
    }
//     this.props.fetchStatus(true)
//     // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`,
//     //     {withCredentials:true})
//     userAPI.getUsers(this.props.currentPage, this.props.totalUsersCount).then(res => {
//     this.props.fetchStatus(false)
//     debugger
//     this.props.setUsers(res.items);
//     this.props.setTotalUsersCount(res.totalCount / 300);
// });

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <UsersFunc
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageClickChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                successFollow={this.props.successFollow}
                successUnFollow={this.props.successUnFollow}
            />
        </>
    }
}

let mapStateUsersToProps = (state: any) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}
let mapDispatchPostsToProps = (dispatch: any) => {
    return {
        getUsers: (currentPage: number, totalUsersCount: number) => {
            dispatch(getUsersTC(currentPage, totalUsersCount))
        },
        successFollow: (userId: number) => {
            dispatch(followTC(userId))
        },
        successUnFollow: (userId: number) => {
            dispatch(unFollowTC(userId))
        }
    }
}
export const UsersContainer = connect(mapStateUsersToProps, mapDispatchPostsToProps)(UsersContainerClassComponent);