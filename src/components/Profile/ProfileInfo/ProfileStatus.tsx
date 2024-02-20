import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {render} from "react-dom";

type ProfileStatusType = {
    status: string
    updateStatusTC: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType, any> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        // this.state.editMode = true
        // this.forceUpdate();
    }
    deactivateEditMode = () => {
        debugger
        this.setState({
            editMode: false
        })
        debugger
        this.props.updateStatusTC(this.state.status);
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) =>{
        this.setState({
            status:e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<any>, snapshot?: any) {
        debugger
        if(prevProps.status !== this.props.status)
        this.setState({
            status: this.props.status
        })
        debugger
        console.log("was call")
    }

    render() {
        console.log("render")
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
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

