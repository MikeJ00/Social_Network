import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean
    login:string
}
export const Header = (props: HeaderType) => {
    debugger
    return <header className={s.header}>
        <img src='https://b2bmap.com/public/uploads/companylogo/1553020223-logo.png'/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
                <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
}