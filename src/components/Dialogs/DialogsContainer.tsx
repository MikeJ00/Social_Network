import React from 'react';
import {addMessagePostAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {MainStateType} from "../../redux/store";
import {AuthWithRedirect} from "../../hoc/AuthWithRedirect";
import {compose} from "redux";

let mapStateToProps = (state: MainStateType) => {
    debugger
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addMessagePostAC(newMessageText))
        },
    }
}
export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthWithRedirect)(Dialogs)