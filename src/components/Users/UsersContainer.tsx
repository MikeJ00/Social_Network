import React from 'react';
import {connect} from "react-redux";
import {followTC, getUsersTC, unFollowTC, UsersType} from "../../redux/users-reducer";
import {UsersFunc} from "./UsersFunc";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {RootStateRedux} from "../../redux/redux-store";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersSelector, getUsersSuperSelector, getUsersWithSelector
} from "../../redux/users-selectors";

type RootUsersTypeForComponent = {
    users: UsersType[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
    getUsers: (currentPage: number, totalUsersCount: number) => void
    successFollow: (userId: number) => void
    successUnFollow: (userId: number) => void
    isAuth: boolean
}

class UsersContainerClassComponent extends React.Component<RootUsersTypeForComponent, any> {
    componentDidMount() {
        debugger
        this.props.getUsers(this.props.currentPage, this.props.totalUsersCount)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.totalUsersCount)
    }

    render() {
        console.log("Render users")
        // if(!this.props.isAuth) return <Redirect to={"login"}/>
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <UsersFunc
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageClickChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                successFollow={this.props.successFollow}
                successUnFollow={this.props.successUnFollow}
            />
        </>
    }
}

// let mapStateUsersToProps = (state: any) => {
//     return {
//         users: state.users.users,
//         pageSize: state.users.pageSize,
//         totalUsersCount: state.users.totalUsersCount,
//         currentPage: state.users.currentPage,
//         isFetching: state.users.isFetching,
//         followingInProgress: state.users.followingInProgress,
//         isAuth: state.auth.isAuth
//     }
// }
let mapStateUsersToProps = (state: RootStateRedux) => {
    console.log("mapStateToProps call")
    return {
        // users: getUsers(state),
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
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
// let withRedirect = AuthWithRedirect(UsersContainerClassComponent)
// export const UsersContainer = AuthWithRedirect(connect(mapStateUsersToProps, mapDispatchPostsToProps)(UsersContainerClassComponent));

export const UsersContainer = compose(
    connect(mapStateUsersToProps, mapDispatchPostsToProps),
    // AuthWithRedirect
)
(UsersContainerClassComponent)