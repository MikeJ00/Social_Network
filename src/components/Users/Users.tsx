import React from 'react';
import styles from './user.module.css'
import {UsersType} from "../../redux/users-reducer";

type RootUsersTypeForComponent = {
    users: UsersType[],
    followClick: (userId: number) => void,
    unFollowClick: (userId: number) => void,
    setUsers: (users: UsersType[]) => void
}

export const Users = (props: RootUsersTypeForComponent) => {
    // if(props.users.length === 0){
    //     props.setUsers([
    //         {
    //             id: 1, photoPics:'https://giftesx.bigo.sg/live/4ha/0MIxpG.jpg',
    //             followed: true, fullName: "Gena", status: "I'm looking job now",
    //             location: {city: "Minks", country: "Belarus"}
    //         },
    //         {
    //             id: 2, photoPics:'https://giftesx.bigo.sg/live/4ha/0MIxpG.jpg',
    //             followed: false, fullName: "Vova", status: "What",
    //             location: {city: "Moscow", country: "Russia"}
    //         },
    //         {
    //             id: 3, followed: false, fullName: "Vlad", status: "Lorem lorem ssssssssss",
    //             location: {city: "Kiev", country: "Ukraine"}
    //         },
    //     ])
    // }

    // const onFollowClick = (id:number) => {
    //     props.followClick
    // }

    // const onUnFollowClick = () =>{
    //     props.unFollowClick
    // }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img alt={"photo will be upload soon"} src={u.photoPics} className={styles.userPhoto}/>
                </div>
                    <div>
                        {u.followed ? <button onClick={()=>{props.followClick(u.id)}}>Follow</button> :
                            <button onClick={()=>{props.unFollowClick(u.id)}}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    );
};
