import React from 'react';
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileStateTypeWithCallback} from "../../redux/state";

export const Profile = (props: ProfileStateTypeWithCallback) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     newPostText={props.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}