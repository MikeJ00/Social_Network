import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {MainDialogsType} from "../../redux/state";


export const Dialogs = (props: MainDialogsType) => {
    let dialogsElements = props.dialogsData.map(
        (el) => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = props.messagesData.map(
        (el) => <DialogMessage message={el.message} id={el.id}/>
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messagesInDialogs}>
                {messagesElements}
            </div>
        </div>

    )
}