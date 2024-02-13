import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {RootProfileContainerType} from "./ProfileContainer";

export type ProfileType = {
    profile:RootProfileContainerType
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}