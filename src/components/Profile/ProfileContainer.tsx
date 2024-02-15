import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {RootStateRedux} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

type RootType = {
    profile: RootProfileContainerType
    setUserProfile:(profile: any)=>void
}
export type RootProfileContainerType = {
    userId: number
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType = {
    small: string
    large: string
}

class ProfileContainerClassComponent extends React.Component<RootType, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(res=>{
                this.props.setUserProfile(res.data)
                debugger
                console.log(res.data)
            })
    }

    render() {
        return ( <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps = (state:any) =>({
    profile: state.profilePage.profile
})
let withUrlDataContainerComponent = withRouter(ProfileContainerClassComponent);

export const ProfileContainer =  connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent)