import {ProfileType} from "./store";
import {profileAPI, userAPI} from "../api/api";
import {changeToggleProgressAC, unfollowAC} from "./users-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
let initialState = {
    postsData: [
        {id: "1", message: "Hi, how are you, man?", likesCount: 2},
        {id: "2", message: "Okay", likesCount: 9},
        {id: "3", message: "ZZZZZ", likesCount: 18},
    ],
    profile: null,
    status: "Hello guys"
}
export const profileReducer = (state = initialState, action: RootActionProfileType): ProfileType => {
    debugger
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsData.length + 1,
                message: action.newPostText,
                likesCount: 2
            }
            return {
                ...state,
                // newPostText: "",
                postsData: [...state.postsData, newPost]
            }
        }
        // case UPDATE_NEW_POST_TEXT: {
        //     let copyState = {...state}
        //     copyState.newPostText = action.newText;
        //     return copyState
        // }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }

}
export let addPostAC = (newPostText:string) => ({type: ADD_POST, newPostText} as const)
// export let updateNewPostTextAC = (text: string) =>
//     ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export let setUserProfileAC = (profile: any) =>
    ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({
    type: SET_STATUS, status
} as const)

// type MainActionType = typeof addPostAC | typeof updateNewPostTextAC
export type RootActionProfileType = addPostActionType
    | setUserProfileActionType | setStatusActionType

// type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type addPostActionType = ReturnType<typeof addPostAC>
type setUserProfileActionType = ReturnType<typeof setUserProfileAC>
type setStatusActionType = ReturnType<typeof setStatusAC>

export const getUsersProfileTC = (userId: number) => (dispatch: any) => {
    debugger
    userAPI.setUsersProfile(userId).then(res => {
        debugger
        // if (res.data.resultCode === 0) {
        dispatch(setUserProfileAC(res.data))
        // dispatch(setUserProfileAC(userId))
        // }
    });
}
export const getStatusTC = (userId: number) => (dispatch: any) => {
    profileAPI.getStatusOfUser(userId).then(res => {
        debugger
        dispatch(setStatusAC(res.data))
    });
}
export const updateStatusTC = (status: string) => (dispatch: any) => {
    debugger
    profileAPI.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            debugger
            dispatch(setStatusAC(status))
        }
    });
}