import React from 'react';
import {connect} from "react-redux";
import {
    changeFetchStatusAC, changeToggleProgressAC,
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import {UsersFunc} from "./UsersFunc";
import {Preloader} from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

type RootUsersTypeForComponent = {
    users: UsersType[],
    followClick: (userId: number) => void,
    unFollowClick: (userId: number) => void,
    setUsers: (users: UsersType[]) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    fetchStatus: (isFetching: boolean) => void
    isFetching: boolean
    updateToggle: (followingInProgress: boolean, userId:number) => void
    followingInProgress:[]
}

class UsersContainerClassComponent extends React.Component<RootUsersTypeForComponent, any> {
    componentDidMount() {
        this.props.fetchStatus(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`,
        //     {withCredentials:true})
        userAPI.getUsers(this.props.currentPage, this.props.totalUsersCount).then(res => {
            this.props.fetchStatus(false)
            debugger
            this.props.setUsers(res.items);
            this.props.setTotalUsersCount(res.totalCount / 300);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.fetchStatus(true)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUsersCount}`,
        //     {withCredentials: true})
        userAPI.getUsers(pageNumber, this.props.totalUsersCount).then(res => {
            this.props.fetchStatus(false)
            debugger
            this.props.setUsers(res.items);
        });
    }

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
                followClick={this.props.followClick}
                unFollowClick={this.props.unFollowClick}
                updateToggle={this.props.updateToggle}
                followingInProgress={this.props.followingInProgress}
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
        followClick: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollowClick: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        fetchStatus: (isFetching: boolean) => {
            dispatch(changeFetchStatusAC(isFetching))
        },
        updateToggle: (followingInProgress: boolean, userId:number) => {
            dispatch(changeToggleProgressAC(followingInProgress, userId))
        }
    }
}
export const UsersContainer = connect(mapStateUsersToProps, mapDispatchPostsToProps)(UsersContainerClassComponent);