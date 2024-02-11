import React from 'react';
import styles from './user.module.css'
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"

type RootUsersTypeForComponent = {
    users: UsersType[],
    followClick: (userId: number) => void,
    unFollowClick: (userId: number) => void,
    setUsers: (users: UsersType[]) => void
}
export class UsersClass extends React.Component<RootUsersTypeForComponent, any>{
    constructor(props:RootUsersTypeForComponent) {
        super(props);
        alert("new obj")
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {
                        debugger
                        this.props.setUsers(res.data.items);
                    }
                );
    }
    // getUsers = () =>{
    //     debugger
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(res => {
    //                     debugger
    //                     this.props.setUsers(res.data.items);
    //                 }
    //             );
    //     }
    // }
    render(){
        return (
            <div>
                {/*<button onClick={this.getUsers}>Get Users</button>*/}
                {this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img alt={"photo will be upload soon"} src={u.photos.small != null ? u.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                this.props.followClick(u.id)
                            }}>Follow</button> :
                            <button onClick={() => {
                                this.props.unFollowClick(u.id)
                            }}>Unfollow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)}
            </div>
        );
    }
}