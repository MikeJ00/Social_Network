import React from 'react';
import styles from './user.module.css'
import {UsersType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user.png"


type RootUsersTypeForComponent = {
    users: UsersType[],
    followClick: (userId: number) => void
    unFollowClick: (userId: number) => void
    pageSize:number
    totalUsersCount:number
    currentPage:number
    onPageClickChanged:(pageNumber:number)=>void
}
let baseUrl = "https://social-network.samuraijs.com/api/1.0"
export const UsersFunc = (props: RootUsersTypeForComponent) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i= 1; i <= pagesCount; i++){
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? styles.selectedPage : undefined}
                    // className={condition ? value : undefined}
                             onClick={(e: any) => {
                                 props.onPageClickChanged(p)
                             }}>{p }</span>
            })}
        </div>
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
}
