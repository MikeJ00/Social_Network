import React from "react";

export const ProfileDataForm = ({profile}:any) =>{
    debugger
    return <>
        <form>
            <div>
                <button onClick={goToEditMode}>
                    Save
                </button>
            </div>
                <b>
                    Full name
                </b>:{createField}
            </form>
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