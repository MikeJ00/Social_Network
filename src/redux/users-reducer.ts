import {userAPI} from "../api/api";
import {Dispatch} from "redux";

export type RootUsersType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
}
type photoType = {
    small?: string
    large?: string
}
export type UsersType = {
    id: number
    photos: photoType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const CHANGE_STATUS_FETCH = "CHANGE_STATUS_FETCH"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState: RootUsersType = {
    users: [],
    pageSize: 1,
    totalUsersCount: 5,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
export const usersReducer = (state = initialState, action: RootActionProfileType) => {
    debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            };
        case SET_USERS: {
            return {
                ...state,
                users: action.users
                // users: [...state.users, ...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case CHANGE_STATUS_FETCH: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            }
        }
        default:
            return state
    }
}
export let followAC = (userId: number) =>
    ({type: FOLLOW, userId, followed: true} as const)
export let unfollowAC = (userId: number) =>
    ({type: UNFOLLOW, userId, followed: false} as const)
export let setUsersAC = (users: UsersType[]) =>
    ({type: SET_USERS, users} as const)
export let setCurrentPageAC = (currentPage: number) =>
    ({type: SET_CURRENT_PAGE, currentPage} as const)
export let setTotalUsersCountAC = (totalCount: number) =>
    ({type: SET_TOTAL_COUNT, totalCount} as const)
export let changeFetchStatusAC = (isFetching: boolean) =>
    ({type: CHANGE_STATUS_FETCH, isFetching} as const)
export let changeToggleProgressAC = (followingInProgress: boolean, userId: number) =>
    ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId} as const)

export type RootActionProfileType = followActionType | unFollowActionType |
    setUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType
    | changeFetchStatusActionType | changeToggleProgressActionType

type followActionType = ReturnType<typeof followAC>
type unFollowActionType = ReturnType<typeof unfollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>
type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
type changeFetchStatusActionType = ReturnType<typeof changeFetchStatusAC>
type changeToggleProgressActionType = ReturnType<typeof changeToggleProgressAC>

export const getUsersTC = (currentPage: number, totalUsersCount: number) => (dispatch: any) => {
    dispatch(setCurrentPageAC(currentPage))
    dispatch(changeFetchStatusAC(true))
    debugger
    userAPI.getUsers(currentPage, totalUsersCount).then(res => {
        dispatch(changeFetchStatusAC(false))
        debugger
        dispatch(setUsersAC(res.items))
        dispatch(setTotalUsersCountAC((res.totalCount / 300)))
    });
}
export const followTC = (userId: number) => (dispatch: any) => {
    dispatch(changeToggleProgressAC(true, userId))
    userAPI.addFollow(userId).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(followAC(userId))
        }
        dispatch(changeToggleProgressAC(false, userId))
    });
}
export const unFollowTC = (userId: number) => (dispatch: any) => {
    debugger
    dispatch(changeToggleProgressAC(true, userId))
    userAPI.deleteFollow(userId).then(res => {
        debugger
        if (res.data.resultCode === 0) {
            dispatch(unfollowAC(userId))
        }
        dispatch(changeToggleProgressAC(false, userId))
    });
}

