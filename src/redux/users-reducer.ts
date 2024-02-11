export type RootUsersType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
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
let initialState: RootUsersType = {
    users: [
        //     {
        //         id: 1, photoPics:'https://giftesx.bigo.sg/live/4ha/0MIxpG.jpg',
        //         followed: true, fullName: "Gena", status: "I'm looking job now",
        //         location: {city: "Minks", country: "Belarus"}
        //     },
        //     {
        //         id: 2, photoPics:'https://giftesx.bigo.sg/live/4ha/0MIxpG.jpg',
        //         followed: false, fullName: "Vova", status: "What",
        //         location: {city: "Moscow", country: "Russia"}
        //     },
        //     {
        //         id: 3, followed: false, fullName: "Vlad", status: "Lorem lorem ssssssssss",
        //         location: {city: "Kiev", country: "Ukraine"}
        //     },
    ],
    pageSize: 1,
    totalUsersCount: 5,
    currentPage: 1
}
export const usersReducer = (state = initialState, action: RootActionProfileType) => {
    debugger
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
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

export type RootActionProfileType = followActionType | unFollowActionType |
    setUsersActionType | setCurrentPageActionType | setTotalUsersCountActionType

type followActionType = ReturnType<typeof followAC>
type unFollowActionType = ReturnType<typeof unfollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>
type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>
