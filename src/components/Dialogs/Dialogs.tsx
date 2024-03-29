import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {DialogsTypeLesson43,} from "../../redux/store";


export const Dialogs = (props: DialogsTypeLesson43) => {

    let dialogsElements = props.dialogsData.map(
        (el) => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messagesElements = props.messagesData.map(
        (el) => <DialogMessage message={el.message} id={el.id} key={el.id}/>
    )
    console.log(messagesElements)
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageTextCb(e.currentTarget.value)
    }
    const onAddMessage = () => {
        props.addMessage(props.newMessageText)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messagesInDialogs}>
                {messagesElements}
                <textarea onChange={onMessageChange}
                          placeholder={"Enter you message"}
                          value={props.newMessageText}/>

                <div>
                    <button onClick={onAddMessage}>
                        Add post
                    </button>
                </div>
            </div>
        </div>

    )
}