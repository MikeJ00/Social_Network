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
let baseUrl = "https://social-network.samuraijs.com/api/1.0"
export const UsersFucnComp = (props: RootUsersTypeForComponent) => {
    debugger
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(res => {
                        debugger
                        props.setUsers(res.data.items);
                    }
                );
        }
    }

    // const onFollowClick = (id:number) => {
    //     props.followClick
    // }

    // const onUnFollowClick = () =>{
    //     props.unFollowClick
    // }

    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img alt={"photo will be upload soon"} src={u.photos.small != null ? u.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                props.followClick(u.id)
                            }}>Follow</button> :
                            <button onClick={() => {
                                props.unFollowClick(u.id)
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
};
