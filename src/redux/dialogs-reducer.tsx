import {MainDialogsType} from "./state";

const ADD_MESSAGE_POST = "ADD-MESSAGE-POST"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
export const dialogsReducer = (state:MainDialogsType, action) => {

    switch (action.type) {
        case ADD_MESSAGE_POST:
            let newMessage = {
                id: "5",
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessText;
            return state
        default:
            return state
    }
}
export let addMessagePostAC = () =>{
    return{
        type:ADD_MESSAGE_POST
    }
}
export let updateNewMessageTextAC = (newMessageText:string) =>{
    return{
        type:UPDATE_NEW_MESSAGE_TEXT,
        newMessText:newMessageText
    }
}
