import React from 'react';
import {addMessagePostAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {MainStateType} from "../../redux/store";


// export const DialogsContainer = (props: any) => {
//     let state = props.store.getState().dialogsPage
//     const onMessageChange = (text: string) => {
//         props.store.dispatch(updateNewMessageTextAC(text))
//     }
//     const addMessage = () => {
//         props.store.dispatch(addMessagePostAC())
//     }
//
//     return (
//         <Dialogs dialogsData={state.dialogsData} messagesData={state.messagesData}
//                  newMessageText={state.newMessageText}
//                  changeNewMessageTextCb={onMessageChange}
//                  onAddMessage={addMessage}/>
//     )
// }
let mapStateToProps = (state: MainStateType) => {
    debugger
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        changeNewMessageTextCb: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        },
        addMessage: () => {
            dispatch(addMessagePostAC())
        },
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);