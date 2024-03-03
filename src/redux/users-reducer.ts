import {userAPI} from "../api/api";

export type RootUsersType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: []
    fake: number
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

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE"
const SET_TOTAL_COUNT = "users/SET_TOTAL_COUNT"
const CHANGE_STATUS_FETCH = "users/CHANGE_STATUS_FETCH"
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState: RootUsersType = {
    users: [],
    pageSize: 1,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    fake: 10
}
export const usersReducer = (state = initialState, action: RootActionProfileType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
                // users: updateObjectInArray(state.users, action.userId, "id", {followed:true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
                // users: updateObjectInArray(state.users, action.userId, "id", {followed:false})

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

export const getUsersTC = (currentPage: number, totalUsersCount: number) => async (dispatch: any) => {
    dispatch(setCurrentPageAC(currentPage))
    dispatch(changeFetchStatusAC(true))
    debugger
    let pr = await userAPI.getUsers(currentPage, totalUsersCount)
    dispatch(changeFetchStatusAC(false))
    dispatch(setUsersAC(pr.items))
    dispatch(setTotalUsersCountAC((pr.totalCount / 200)))
}
const unfollowFollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(changeToggleProgressAC(true, userId))
    let pr = await apiMethod(userId)
    if (pr.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(changeToggleProgressAC(false, userId))
}
export const followTC = (userId: number) => {
    return async (dispatch: any) => {
        let apiMethod = userAPI.addFollow.bind(userAPI)
        let actionCreator = followAC
        unfollowFollowFlow(dispatch, userId, apiMethod, actionCreator)
        // dispatch(changeToggleProgressAC(true, userId))
        // let pr = await apiMethod(userId)
        //     if (pr.data.resultCode === 0) {
        //         dispatch(actionCreator(userId))
        //     }
        //     dispatch(changeToggleProgressAC(false, userId))
    }
}
export const unFollowTC = (userId: number) => async (dispatch: any) => {
    unfollowFollowFlow(dispatch, userId, userAPI.deleteFollow.bind(userAPI), unfollowAC)
    // dispatch(changeToggleProgressAC(true, userId))
    // let pr = await apiMethod(userId)
    // if (pr.data.resultCode === 0) {
    //     dispatch(actionCreator(userId))
    // }
    // dispatch(changeToggleProgressAC(false, userId))
}

