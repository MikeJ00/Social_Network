import React, {useRef} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {MainDialogsTypeWithCb} from "../../redux/state";


export const Dialogs = (props: MainDialogsTypeWithCb) => {
    let dialogsElements = props.dialogsData.map(
        (el) => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = props.messagesData.map(
        (el) => <DialogMessage message={el.message} id={el.id}/>
    )

    let newDialogText = useRef<HTMLTextAreaElement>(null)
    // const addPost = () => {
    //     if (newDialogText.current !== null) {
    //         alert(newDialogText.current.value)
    //     }
    // }

    const onMessageChange = () => {
        if (newDialogText.current !== null) {
            props.updateNewMessageText(newDialogText.current.value)
        }
    }
    const addPost = () => {
        props.addMessagePost()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messagesInDialogs}>
                {messagesElements}

                <textarea onChange={onMessageChange} ref={newDialogText} value={props.newMessageText}/>

                <div>
                    <button onClick={addPost}>
                        Add post
                    </button>
                </div>
            </div>
        </div>

    )
}