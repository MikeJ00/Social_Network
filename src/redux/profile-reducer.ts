import {ProfileType} from "./store";
import {userAPI} from "../api/api";
import {changeToggleProgressAC, unfollowAC} from "./users-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE"
let initialState = {
    postsData: [
        {id: "1", message: "Hi, how are you, man?", likesCount: 2},
        {id: "2", message: "Okay", likesCount: 9},
        {id: "3", message: "ZZZZZ", likesCount: 18},
    ],
    newPostText: "It-incubator",
    profile:null
}
export const profileReducer = (state = initialState, action: RootActionProfileType): ProfileType => {
    debugger
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postsData.length+1,
                message: state.newPostText,
                likesCount: 2
            }
            return {
                ...state,
                newPostText: "",
                postsData: [...state.postsData, newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = {...state}
            copyState.newPostText = action.newText;
            return copyState
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}}
        default:
            return state
    }
}
export let addPostAC = () => ({type: ADD_POST} as const)
export let updateNewPostTextAC = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export let setUserProfileAC = (profile: any) =>
    ({type: SET_USER_PROFILE, profile} as const)

// type MainActionType = typeof addPostAC | typeof updateNewPostTextAC
export type RootActionProfileType = updateNewPostTextActionType | addPostActionType | setUserProfileActionType
type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type addPostActionType = ReturnType<typeof addPostAC>
type setUserProfileActionType = ReturnType<typeof setUserProfileAC>

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

// debugger
// userAPI.setUsersProfile(userId).then(res => {
//     this.props.setUserProfile(res.data)
// })
// }