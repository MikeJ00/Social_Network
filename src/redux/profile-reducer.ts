import {ProfileType} from "./store";
import {profileAPI, userAPI} from "../api/api";

const ADD_POST = "profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE"
const SET_STATUS = "profile/SET_STATUS"
const DELETE_POST = "profile/DELETE_POST"
const SAVE_PHOTO = "profile/SAVE_PHOTO"

let initialState:ProfileType = {
    postsData: [
        {id: "1", message: "Hi, how are you, man?", likesCount: 2},
        {id: "2", message: "Okay", likesCount: 9},
        {id: "3", message: "ZZZZZ", likesCount: 18},
    ],
    profile: null,
    status: "Hello guys"
}
export const profileReducer = (state:ProfileType = initialState, action: RootActionProfileType): ProfileType => {
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
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, postsData: state.postsData.filter((p) => p.id != action.postId)}
        }
        case SAVE_PHOTO: {
            debugger
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }

}
export let addPostAC = (newPostText: string) => ({type: ADD_POST, payload: {newPostText}} as const)
// export let updateNewPostTextAC = (text: string) =>
//     ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export let setUserProfileAC = (profile: any) =>
    ({type: SET_USER_PROFILE, profile} as const)
export const setStatusAC = (status: string) => ({
    type: SET_STATUS, status
} as const)
export const deletePostAC = (postId: number) => ({
        type: DELETE_POST, postId
    }
)
export const savePhotoAC = (photos: string) => ({
        type: SAVE_PHOTO, photos
    }
)
export type RootActionProfileType = addPostActionType
    | setUserProfileActionType | setStatusActionType
    | deletePostActionType | setPhotoActionType

type addPostActionType = ReturnType<typeof addPostAC>
type setUserProfileActionType = ReturnType<typeof setUserProfileAC>
type setStatusActionType = ReturnType<typeof setStatusAC>
type deletePostActionType = ReturnType<typeof deletePostAC>
type setPhotoActionType = ReturnType<typeof savePhotoAC>

export const getUsersProfileTC = (userId: number) => async (dispatch: any) => {
    debugger
    let promise = await userAPI.setUsersProfile(userId)
    dispatch(setUserProfileAC(promise.data))
}
export const getStatusTC = (userId: number) => async (dispatch: any) => {
    let promise = await profileAPI.getStatusOfUser(userId)
    dispatch(setStatusAC(promise.data))
}
export const updateStatusTC = (status: string) => async (dispatch: any) => {
    let pr = await profileAPI.updateStatus(status)
    if (pr.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}
export const savePhotoTC = (file: string) => async (dispatch: any) => {
    debugger
    let pr = await profileAPI.savePhoto(file)
    if (pr.data.resultCode === 0) {
        debugger
        dispatch(savePhotoAC(pr.data.data.photos))
    }
}