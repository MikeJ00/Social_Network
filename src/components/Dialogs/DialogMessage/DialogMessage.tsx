import s from "../Dialogs.module.css";
import React from "react";

type DialogMessagePropsType = {
    message: string
    id: string
}
export const DialogMessage = (props: DialogMessagePropsType) => {
    return (
        <div className={s.messageInDialogs}>{props.message}</div>
    )
}