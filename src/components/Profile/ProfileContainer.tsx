import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUsersProfileTC, savePhotoTC, updateStatusTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

type RootType = {
    profile: RootProfileContainerType
    getUsersProfileTC: (userId: any) => void
    isAuth: boolean
    getStatusTC: (userId: number) => void
    status: string
    updateStatusTC: (status: string) => void
    authUserId: number
    savePhotoTC:(file:string) =>void
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
            debugger
            // userId = 28958;
            userId = this.props.authUserId;
            if(!userId){
                this.props.history.push("/login")
            }
        }
        debugger
        this.props.getUsersProfileTC(userId)
        this.props.getStatusTC(userId)
    }
    componentDidUpdate(prevProps: Readonly<RootType>, prevState: Readonly<any>, snapshot?: any) {
        if(this.props.match.params.userId != prevProps.match.params.userId){
            let userId = this.props.match.params.userId;
            if (!userId) {
                debugger
                // userId = 28958;
                userId = this.props.authUserId;
                if(!userId){
                    this.props.history.push("/login")
                }
            }
            debugger
            this.props.getUsersProfileTC(userId)
            this.props.getStatusTC(userId)
        }
    }

    render() {
        // if (!this.props.isAuth) return <Redirect to={"login"}/>
        return (<Profile {...this.props} profile={this.props.profile}
                         isOwner={!this.props.match.params.userId}
                         status={this.props.status}
                         updateStatusTC={this.props.updateStatusTC}
                         savePhotoTC={this.props.savePhotoTC}/>
        )
    }
}

let mapStateToProps = (state: any) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth

    })
}
export const ProfileContainer = compose(
    connect(mapStateToProps, {getUsersProfileTC, getStatusTC, updateStatusTC,savePhotoTC }),
    withRouter,
    // AuthWithRedirect
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