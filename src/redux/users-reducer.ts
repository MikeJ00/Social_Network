export type RootUsersType = {
    users: UsersType[]
}
type photoType ={
    small?: string
    large?: string
}
export type UsersType = {
    id: number
    photos:photoType
    followed: boolean
    name:string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"
let initialState:RootUsersType = {
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
                users: [...state.users, ...action.users]
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

export type RootActionProfileType = followActionType | unFollowActionType | setUsersActionType
type followActionType = ReturnType<typeof followAC>
type unFollowActionType = ReturnType<typeof unfollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>