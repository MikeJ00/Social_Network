import React from 'react';
import {addMessagePostAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = (props: any) => {
    let state = props.store.getState().dialogsPage
    const onMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }
    const addMessage = () => {
        props.store.dispatch(addMessagePostAC())
    }

    return (
        <Dialogs dialogsData={state.dialogsData} messagesData={state.messagesData}
                 newMessageText={state.newMessageText}
                 changeNewMessageTextCb={onMessageChange}
                 onAddMessage={addMessage}/>
    )
}