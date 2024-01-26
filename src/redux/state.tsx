import React from 'react';

export type StoreStateType = {
    store: RootStateType
}
export type RootStateType = {
    state: MainStateType
    addPost: () => void
    addMessagePost: () => void
    updateNewPostText: (newText: string) => void
    updateNewMessageText: (newText: string) => void
}
export type MainStateType = {
    profilePage: ProfileType
    dialogsPage: MainDialogsType
}
export type ProfileStateTypeWithCallback = {
    postsData: Array<PostsDataType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}
export type ProfileType = {
    postsData: Array<PostsDataType>
    newPostText: string
    // addPost: (postMessages: string) => void
}
export type PostsDataType = {
    id: string
    message: string
    likesCount: number | undefined

}
export type MainDialogsTypeWithCb = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
    addMessagePost: () => void
    updateNewMessageText: (newText: string) => void
}
export type MainDialogsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
    // addMessagePost: () => void
    // updateNewMessageText: (newText:string) => void
}
type DialogsDataType = {
    id: string,
    name: string
}
type MessagesDataType = {
    id: string,
    message: string
}


export const store = {
    state: {
        profilePage: {
            postsData: [
                {id: "1", message: "Hi, how are you, man?", likesCount: 2},
                {id: "2", message: "Okay", likesCount: 9},
                {id: "3", message: "ZZZZZ", likesCount: 18},
            ],
            newPostText: "It-incubator"
        },
        dialogsPage: {
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
        }
    },
    addPost: () =>{
        let newPost = {
            id: "4",
            message: store.state.profilePage.newPostText,
            likesCount: 2
        }
        store.state.profilePage.postsData.push(newPost);
        store.state.profilePage.newPostText = ""
        callsubscriber();
    },
    addMessagePost:() => {
        let newMessage = {
            id: "5",
            message: store.state.dialogsPage.newMessageText
        }
        store.state.dialogsPage.messagesData.push(newMessage);
        store.state.dialogsPage.newMessageText = ""
        callsubscriber();
    },
    updateNewMessageText: (newText: string) => {
        store.state.dialogsPage.newMessageText = newText;
        callsubscriber();
    },
    updateNewPostText: (newText: string) => {
        store.state.profilePage.newPostText = newText;
        callsubscriber();
    },
}
let callsubscriber = () => {
    console.log("state was changed")
}
export const subscribe = (observer: any) => {
    callsubscriber = observer;
}
// let store = {
//     _subcsriber(){
//         console.log('no subscribers')
//     },
//     _state:{
//         firstName: "It-incubator",
//         lastName: "It-kama",
//     },
//     getState(){
//         return this._state
//     },
//     subscribe(observer){
//         this._subcsriber = observer
//     },
//     setFirstName(value) {
//         this._state.firstName = value;
//         this._subcsriber();
//     }
// }





