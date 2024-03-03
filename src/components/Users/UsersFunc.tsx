import React from 'react';
import styles from './user.module.css'
import {UsersType} from "../../redux/users-reducer";
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";


type RootUsersTypeForComponent = {
    users: UsersType[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageClickChanged: (pageNumber: number) => void
    followingInProgress: []
    successFollow: (userId: number) => void
    successUnFollow: (userId: number) => void
}
let baseUrl = "https://social-network.samuraijs.com/api/1.0"
export const UsersFunc = (props: RootUsersTypeForComponent) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span key={p} className={props.currentPage === p ? styles.selectedPage : undefined}
                             onClick={(e: any) => {
                                 props.onPageClickChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile' + u.id}>
                    <img alt={"photo will be upload soon"} src={u.photos.small != null ? u.photos.small : userPhoto}
                         className={styles.userPhoto}/>
                            </NavLink>
                </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.successUnFollow(u.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          debugger
                                          props.successFollow(u.id)
                                          // props.updateToggle(true, u.id)
                                          // userAPI.addFollow(u.id).then(res => {
                                          //     if (res.data. resultCode === 0) {
                                          //         props.followClick(u.id)
                                          //     }
                                          //     props.updateToggle(false, u.id)
                                          // })
                                      }}>Follow</button>
                        }
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
