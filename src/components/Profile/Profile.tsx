import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";

export const Profile = (props: any) => {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}