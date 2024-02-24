import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {LogOutTC} from "../../redux/auth-reducer";

type HeaderType = {
    isAuth: boolean
    login: string
    LogOutTC:()=>void
}
export const Header = (props: HeaderType) => {
    debugger
    return <header className={s.header}>
        <img src='https://b2bmap.com/public/uploads/companylogo/1553020223-logo.png'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.LogOutTC}>Log out</button></div>
                : <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
}