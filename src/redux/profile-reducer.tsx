import React from 'react';
import {ProfileType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let initialState = {
    postsData: [
        {id: "1", message: "Hi, how are you, man?", likesCount: 2},
        {id: "2", message: "Okay", likesCount: 9},
        {id: "3", message: "ZZZZZ", likesCount: 18},
    ],
    newPostText: "It-incubator"
}
export const profileReducer = (state = initialState, action: RootActionProfileType): ProfileType => {
    debugger
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: "4",
                message: state.newPostText,
                likesCount: 2
            }
            let copyState = {...state}
            copyState.postsData = [...state.postsData]
            copyState.postsData.push(newPost);
            copyState.newPostText = ""
            return copyState
        }
        case UPDATE_NEW_POST_TEXT: {
            let copyState = {...state}
            debugger
            copyState.newPostText = action.newText;
            return copyState
        }
        default:
            return state
    }
}
export let addPostAC = () => ({type: ADD_POST} as const)
export let updateNewPostTextAC = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

// type MainActionType = typeof addPostAC | typeof updateNewPostTextAC
export type RootActionProfileType = updateNewPostTextActionType | addPostActionType
type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type addPostActionType = ReturnType<typeof addPostAC>