import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {RootStoreType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";


export const MyPostsContainer = (props: any) => {
    let state = props.store.getState()

    const addPost = () => {
        debugger
        props.store.dispatch(addPostAC())
    }
    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts newPostText={state.profilePage.newPostText} onAddPost={addPost}
                 postsData={state.profilePage.postsData} changeNewTextCallBack={onPostChange}/>
    )
}