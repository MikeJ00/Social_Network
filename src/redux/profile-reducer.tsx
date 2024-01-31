import React from 'react';
import {ProfileType} from "./store";
import {addMessagePostAC, updateNewMessageTextAC} from "./dialogs-reducer";

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
export const profileReducer = (state = initialState, action:RootActionType):ProfileType => {
    debugger
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "4",
                message: state.newPostText,
                likesCount: 2
            }
            state.postsData.push(newPost);
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            debugger
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}
export let addPostAC = () => ({type: ADD_POST} as const)
export let updateNewPostTextAC = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

// type MainActionType = typeof addPostAC | typeof updateNewPostTextAC
type RootActionType = updateNewPostTextActionType | addPostActionType
type updateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type addPostActionType = ReturnType<typeof addPostAC>