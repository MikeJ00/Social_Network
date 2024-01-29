import React from 'react';

export type RootStateType = {
    state: MainStateType
    dispatch: (action: any) => void
    // addPost: () => void
    // addMessagePost: () => void
    // updateNewPostText: (newText: string) => void
    // updateNewMessageText: (newText: string) => void
}
export type MainStateType = {
    profilePage: ProfileType
    dialogsPage: MainDialogsType

}
export type ProfileStateTypeWithCallback = {
    postsData: Array<PostsDataType>
    newPostText: string
    dispatch: (action: any) => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
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
    // addMessagePost: () => void
    // updateNewMessageText: (newText: string) => void
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

// let rerenderEntireTree = () => {
//     console.log("state was changed")
// }

export let store = {
    _state: {
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
    _callSubscriber: (state: any) => {
        console.log("state was changed")
    },

    getState() {
        debugger
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: "4",
            message: this._state.profilePage.newPostText,
            likesCount: 2
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: "4",
                message: this._state.profilePage.newPostText,
                likesCount: 2
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            debugger
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if(action.type === ){

        }
    }
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE_POST = "ADD-MESSAGE-POST"
export let addPostAC = () => ({type: ADD_POST})
export let updateNewPostTextAC = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export let addMessagePost = () =>{
    return{
        type:ADD_MESSAGE_POST
    }
}

// addMessagePost: () => {
//     let newMessage = {
//         id: "5",
//         message: state.dialogsPage.newMessageText
//     }
//     state.dialogsPage.messagesData.push(newMessage);
//     state.dialogsPage.newMessageText = ""
//     rerenderEntireTree()
// },

// updateNewMessageText: (newText: string) => {
//     state.dialogsPage.newMessageText = newText;
//     rerenderEntireTree()
// },

// export const addPost = () => {
//     let newPost = {
//         id: "4",
//         message: state.profilePage.newPostText,
//         likesCount: 2
//     }
//     state.profilePage.postsData.push(newPost);
//     state.profilePage.newPostText = ""
//     rerenderEntireTree();
// }

// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree()
// }

// export const subscribe = (observer: any) => {
//     rerenderEntireTree = observer;
// }


