import React from 'react';
import s from './ProfileInfo.module.css'
import {render} from "react-dom";

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType, any> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        console.log(this.state.editMode)
        debugger
        this.setState({
            editMode: true
        })
        console.log(this.state.editMode)
        // this.state.editMode = true
        // this.forceUpdate();
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode:false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
            <span onDoubleClick={this.activateEditMode}>
                {this.props.status}
            </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

