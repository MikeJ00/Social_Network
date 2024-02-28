import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatusTC: (status: string) => void
}


export const ProfileStatusOnHooks = (props: ProfileStatusType) => {
    debugger
    // let stateWithSetState = useState(true)
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status ])

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatusTC(status);
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    }
    console.log("render")
    return (
        <div>
            {!editMode &&
                <div>
            <span onDoubleClick={activateMode}>
                {props.status || "22222222"}
            </span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}


