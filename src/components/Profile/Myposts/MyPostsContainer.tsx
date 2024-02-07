import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MainStateType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


// export const MyPostsContainer = (props: any) => {
//     let state = props.store.getState()
//
//     const addPost = () => {
//         debugger
//         props.store.dispatch(addPostAC())
//     }
//     const onPostChange = (text: string) => {
//         props.store.dispatch(updateNewPostTextAC(text))
//     }
//
//     return (
//         <MyPosts newPostText={state.profilePage.newPostText} onAddPost={addPost}
//                  postsData={state.profilePage.postsData} changeNewTextCallBack={onPostChange}/>
//     )
// }

let mapStatePostsToProps = (state: MainStateType) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchPostsToProps = (dispatch: any) => {
    return {
        PostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        },
        addPost: () => {
            dispatch(addPostAC())
        },
    }
}
export const MyPostsContainer = connect(mapStatePostsToProps, mapDispatchPostsToProps)(MyPosts);