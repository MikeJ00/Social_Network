import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUsersProfileTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

type RootType = {
    profile: RootProfileContainerType
    getUsersProfileTC: (userId: any) => void
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
        if (!userId) {
            userId = 2;
        }
        debugger
        this.props.getUsersProfileTC(userId)
        // userAPI.setUsersProfile(userId).then(res => {
        //     this.props.setUserProfile(res.data)
        // })
    }

    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
    //     .then(res=>{
    //         this.props.setUserProfile(res.data)
    //         debugger
    //         console.log(res.data)
    //         })
    // }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})
let withUrlDataContainerComponent = withRouter(ProfileContainerClassComponent);

export const ProfileContainer = connect(mapStateToProps, {getUsersProfileTC})(withUrlDataContainerComponent)