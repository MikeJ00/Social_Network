import React, {ChangeEventHandler, useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {addMessagePostAC, MainDialogsTypeWithCb, updateNewMessageTextAC} from "../../redux/state";


export const Dialogs = (props: MainDialogsTypeWithCb) => {
    let dialogsElements = props.dialogsData.map(
        (el) => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = props.messagesData.map(
        (el) => <DialogMessage message={el.message} id={el.id}/>
    )

    let newDialogText = useRef<HTMLTextAreaElement>(null)

    const onMessageChange = (e:any) => {
        let newMessageText = e.target.value
        props.dispatch(updateNewMessageTextAC(newMessageText))
    }
    const addMessage = () => {
        props.dispatch(addMessagePostAC())
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
                          ref={newDialogText}
                          value={props.newMessageText}/>

                <div>
                    <button onClick={addMessage}>
                        Add post
                    </button>
                </div>
            </div>
        </div>

    )
}