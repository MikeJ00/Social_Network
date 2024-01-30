import React from 'react';
import {ProfileType} from "./state";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
export const profileReducer = (state:ProfileType, action) => {

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
export let addPostAC = () => ({type: ADD_POST})
export let updateNewPostTextAC = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

type MainActionType = typeof addPostAC | typeof updateNewPostTextAC