import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Myposts/MyPostsContainer";
import {RootProfileContainerType} from "./ProfileContainer";

export type ProfileType = {
    profile:RootProfileContainerType
    status:string
    updateStatusTC: (status: string) => void
}
export const Profile = (props: ProfileType) => {
    console.log("Profile")
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
            updateStatusTC={props.updateStatusTC}/>
            <MyPostsContainer/>
        </div>
    )
}