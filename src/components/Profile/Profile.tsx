import React from 'react';
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileStateTypeWithCallback, RootStoreType} from "../../redux/store";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";

export const Profile = (props: RootStoreType) => {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}