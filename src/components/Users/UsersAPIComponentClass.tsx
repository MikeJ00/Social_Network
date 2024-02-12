import React from 'react';
import styles from './user.module.css'
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from "../../assets/images/user.png"
import {UsersFunc} from "./UsersFunc";
//
// type RootUsersTypeForComponent = {
//     users: UsersType[],
//     followClick: (userId: number) => void,
//     unFollowClick: (userId: number) => void,
//     setUsers: (users: UsersType[]) => void
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalUsersCount: number) => void
// }
//
// export class UsersAPIComponentClass extends React.Component<RootUsersTypeForComponent, any> {
//     componentDidMount() {
//         alert("new obj")
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`)
//             .then(res => {
//                 debugger
//                 this.props.setUsers(res.data.items);
//                 this.props.setTotalUsersCount(res.data.totalCount / 200);
//             });
//     }
//
//     onPageChanged = (pageNumber: number) => {
//         this.props.setCurrentPage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.totalUsersCount}`)
//             .then(res => {
//                 debugger
//                 this.props.setUsers(res.data.items);
//             });
//     }
//
//     render() {
//         return <UsersFunc
//             totalUsersCount={this.props.totalUsersCount}
//             pageSize={this.props.pageSize}
//             currentPage={this.props.currentPage}
//             onPageClickChanged={this.onPageChanged}
//             users={this.props.users}
//             followClick={this.props.followClick}
//             unFollowClick={this.props.unFollowClick}
//         />
//     }
// }