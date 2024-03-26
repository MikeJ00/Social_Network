import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../Profile";
import {ProfileStatusOnHooks} from "./ProfileStatusOnHooks";
import userPhoto from '../../../../src/assets/images/user.png'
import {ProfileDataForm} from './ProfileDataForm'

export const ProfileInfo = (props: ProfileType) => {

    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const uploadPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhotoTC(e.target.files[0])
        }

    }
    return (
        <div>
            <div>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={"file"} onChange={uploadPhoto}/>}
                {editMode ?
                    <ProfileDataForm/> :
                    <ProfileData profile={props.profile}
                                 isOwner={props.isOwner}
                    goToEditMode={()=>{setEditMode(true)}}/>}
                {/*<ProfileData profile={props.profile}/>*/}

                <ProfileStatusOnHooks status={props.status}
                                      updateStatusTC={props.updateStatusTC}/>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    )
}
const ProfileData = ({profile, isOwner, goToEditMode}:any) =>{
    debugger
    return <>
    { isOwner && <div>
            <button onClick={goToEditMode}>
                edit
            </button>
        </div>}
    <div>
            <b>
                Full name
            </b>:{profile.fullName}
        </div>
        <b>Looking for a job:</b>:{profile.lookingForAJob ? "yes" : "no"}
    {profile.lookingForAJob &&
    <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
    </div>
    }
    <div>
        <b>Contacts:</b>{Object.keys(profile.contacts).map(
        key=>{
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        }
    )}
    </div>
    </>
}


const Contact = ({contactTitle, contactValue}) =>{
    return <div>
        <b>
            {contactTitle}
        </b>:
        {contactValue}
    </div>
}