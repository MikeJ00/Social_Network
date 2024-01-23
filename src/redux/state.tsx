import React from 'react';

export const state = {
    profilePage: {
        postsData: [
            {id: "1", message: "Hi, how are you, man?", likesCount: 2},
            {id: "2", message: "Okay", likesCount: 9},
            {id: "3", message: "ZZZZZ", likesCount: 18},
        ],
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
        ]
    }
}
export type RootStateType = {
    state: MainStateType
}


type MainStateType = {
    profilePage: ProfileType
    dialogsPage: MainDialogsType
}

export type ProfileType = {
    postsData: Array<PostsDataType>
}

export type PostsDataType = {
    id: string
    message: string
    likesCount: number | undefined
}

export type MainDialogsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
}
type DialogsDataType = {
    id: string,
    name: string
}
type MessagesDataType = {
    id: string,
    message: string
}