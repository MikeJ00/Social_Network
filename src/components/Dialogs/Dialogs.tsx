import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogMessage} from "./DialogMessage/DialogMessage";
import {DialogsTypeLesson43,} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const addNewMessage = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <>
                <Field component={"textarea"} name="newMessageText" placeholder={"write new message"}/>
                <button>
                    Add post
                </button>
            </>
        </form>
    )
}

const ReduxDialogsForm = reduxForm({
    form: 'dialogsAddMessageForm'
})(addNewMessage)


export const Dialogs = (props: DialogsTypeLesson43) => {
    const onSubmit = (formData: any) => {
        debugger
        console.log(formData)
    }

    let dialogsElements = props.dialogsData.map(
        (el) => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    let messagesElements = props.messagesData.map(
        (el) => <DialogMessage message={el.message} id={el.id} key={el.id}/>
    )
    // const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.changeNewMessageTextCb(e.currentTarget.value)
    // }
    // const onAddMessage = () => {
    //     props.addMessage(props.newMessageText)
    // }
    const addNewMessage = (values: any) => {
        props.addMessage(values.newMessageText)
    }
    // if(!props.isAuth){
    //     return <Redirect to={"/login"}/>
    // }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messagesInDialogs}>
                {messagesElements}
                <ReduxDialogsForm onSubmit={addNewMessage}/>

                {/*<textarea onChange={onMessageChange}*/}
                {/*          placeholder={"Enter you message"}*/}
                {/*          value={props.newMessageText}/>*/}

                {/*<div>*/}
                {/*    <button onClick={onAddMessage}>*/}
                {/*        Add post*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>

    )
}
