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
    pageSize:number
    totalUsersCount:number
    currentPage:number
    setCurrentPage:(currentPage: number) => void
    setTotalUsersCount:(totalUsersCount:number) => void
}
export class UsersClass extends React.Component<RootUsersTypeForComponent, any> {
    componentDidMount() {
        alert("new obj")
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`)
            .then(res => {
                    debugger
                    this.props.setUsers(res.data.items);
                    this.props.setTotalUsersCount(res.data.totalCount/200);
                });
    }
    onPageClickChanged = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUsersCount}`)
            .then(res => {
                debugger
                this.props.setUsers(res.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i= 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p=>{
                        return <span className={this.props.currentPage === p  ? styles.selectedPage : undefined}
                                     // className={condition ? value : undefined}
                        onClick={(e:any)=>{this.onPageClickChanged(p)}}>{p}</span>
                    })}
                </div>
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