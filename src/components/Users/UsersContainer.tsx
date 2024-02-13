import React from 'react';
import {connect} from "react-redux";
import {
    changeFetchStatusAC,
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reducer";
import {RootStateRedux} from "../../redux/redux-store";
import axios from "axios";
import {UsersFunc} from "./UsersFunc";
import {Preloader} from "../common/Preloader/Preloader";

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
}

class UsersContainerClassComponent extends React.Component<RootUsersTypeForComponent, any> {
    componentDidMount() {
        this.props.fetchStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`)
            .then(res => {
                this.props.fetchStatus(false)
                debugger
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount / 300);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.fetchStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUsersCount}`)
            .then(res => {
                this.props.fetchStatus(false)
                debugger
                this.props.setUsers(res.data.items);
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
            />
        </>
    }
}

let mapStateUsersToProps = (state: RootStateRedux) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching
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
        }
    }
}
export const UsersContainer = connect(mapStateUsersToProps, mapDispatchPostsToProps)(UsersContainerClassComponent);