import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUsersProfileTC, updateStatusTC} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {AuthWithRedirect} from "../../hoc/AuthWithRedirect";
import {compose} from "redux";

type RootType = {
    profile: RootProfileContainerType
    getUsersProfileTC: (userId: any) => void
    isAuth: boolean
    getStatusTC:(userId: number) => void
    status:string
    updateStatusTC: (status: string) => void
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
            userId = 28958;
        }
        debugger
        this.props.getUsersProfileTC(userId)

        // userAPI.setUsersProfile(userId).then(res => {
        //     this.props.setUserProfile(res.data)
        // })
        this.props.getStatusTC(userId)
    }

    render() {
        debugger
        // if (!this.props.isAuth) return <Redirect to={"login"}/>
        return (<Profile {...this.props} profile={this.props.profile}
                         status={this.props.status} updateStatusTC={this.props.updateStatusTC}/>
        )
    }
}

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
export const ProfileContainer = compose(
    connect(mapStateToProps, {getUsersProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    AuthWithRedirect
)(ProfileContainerClassComponent)


// let AuthRedirectComponent = AuthWithRedirect(ProfileContainerClassComponent);

// let mapStateToPropsForRedirect = (state: any) => ({
//     isAuth: state.auth.isAuth
// })
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

// (props:RootType) =>{
//     if(!props.isAuth) return <Redirect to={"login"}/>
//     return <ProfileContainerClassComponent{...props}/>
// }

// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export const ProfileContainer = connect(mapStateToProps, {getUsersProfileTC})(withUrlDataContainerComponent)