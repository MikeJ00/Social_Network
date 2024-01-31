import {MainDialogsType} from "./store";

const ADD_MESSAGE_POST = "ADD-MESSAGE-POST"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialState = {
    dialogsData: [
        {id: "1", name: "Kostja"},
        {id: "2", name: "Alexey"},
        {id: "3", name: "Valera"},
        {id: "4", name: "Oleg"},
        {id: "5", name: "Petja"},
    ],
    messagesData: [
        {id: "1", message: "Hello"},
        {id: "2", message: "Welcome"},
        {id: "3", message: "ZZZZZ"},
        {id: "4", message: "How you day?"},
    ],
    newMessageText: "New text you"
};
export const dialogsReducer = (state = initialState, action:RootActionType):MainDialogsType => {

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
    } as const
}
export let updateNewMessageTextAC = (newMessageText:string) =>{
    return{
        type:UPDATE_NEW_MESSAGE_TEXT,
        newMessText:newMessageText
    } as const
}
type RootActionType = updateNewMessageTextActionType | addMessagePostActionType
type updateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>
type addMessagePostActionType = ReturnType<typeof addMessagePostAC>
