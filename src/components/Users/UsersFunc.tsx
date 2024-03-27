import React, {useState} from 'react';
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
    let portionSize = 10


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [currentPortion, setCurrentPortion] = useState(1);
    let currentLeftBorder = (currentPortion - 1) * portionSize + 1;
    let currentRightBorder = currentPortion * portionSize;
    return (
        <div>
            <div>
                {
                    currentPortion > 1
                        ? <span>
			<button onClick={() => {
                props.onPageClickChanged(pages[0])
                setCurrentPortion(1)
            }}>toFirst</button>
			<button onClick={() => {
                currentPortion !== 1 && setCurrentPortion(currentPortion - 1)
            }}> PREV </button>
		</span>
                        : null
                }{
                pages
                    .filter(p => currentLeftBorder <= p && p <= currentRightBorder)
                    .map(p => (
                        <span
                            key={p}
                            onClick={(e) => {
                                props.onPageClickChanged(p)
                            }}
                            // className={currentPage === p ? s.selectedPage : s.pageLink}> {p}
                        >{p}
			</span>
                    ))
            }{
                currentPortion < portionCount
                    ? <span>
			<button onClick={() => {
                currentPortion !== pagesCount && setCurrentPortion(currentPortion + 1)
            }}> NEXT </button> <button onClick={() => {
                        props.onPageClickChanged(pages[pages.length - 1])
                        setCurrentPortion(portionCount)
                    }}>toLast</button>
		</span>
                    : null
            }
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
                        <div>{u.location}</div>
                    </span>
        </span>
            </div>)}
        </div>
    )
}
