import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id: string
    name: string
}
export const DialogItem = (props: DialogItemPropsType) => {
    let currentPath = 'messages/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={currentPath}> {props.name}</NavLink>
        </div>
    )
}