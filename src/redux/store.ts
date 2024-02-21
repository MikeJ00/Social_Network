export type MainStateType = {
    profilePage: ProfileType
    dialogsPage: MainDialogsType
    auth:any
}
export type DialogsTypeLesson43 = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    newMessageText: string
    changeNewMessageTextCb: (text: string) => void
    addMessage: (newMessageText: string) => void
    isAuth:boolean
}
export type MyPostsTypeLesson43 = {
    postsData: Array<PostsDataType>
    newPostText: string
    PostChange: (text: string) => void
    addPost: (newPostText: string) => void
}
export type ProfileType = {
    postsData: Array<PostsDataType>
    // newPostText: string
    profile:null
    status:string
    // addPost: (postMessages: string) => void
}
export type PostsDataType = {
    id: string | number
    message: string
    likesCount: number
}
export type MainDialogsType = {
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>
    // newMessageText: string
    // addMessagePost: () => void
    // updateNewMessageText: (newText:string) => void
}
type DialogsDataType = {
    id: string,
    name: string
}
type MessagesDataType = {
    id: string | number
    message: string
}
// export let store = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: "1", message: "Hi, how are you, man?", likesCount: 2},
//                 {id: "2", message: "Okay", likesCount: 9},
//                 {id: "3", message: "ZZZZZ", likesCount: 18},
//             ],
//             newPostText: "It-incubator"
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: "1", name: "Kostja"},
//                 {id: "2", name: "Alexey"},
//                 {id: "3", name: "Valera"},
//                 {id: "4", name: "Oleg"},
//                 {id: "5", name: "Petja"},
//             ],
//             messagesData: [
//                 {id: "1", message: "Hello"},
//                 {id: "2", message: "Welcome"},
//                 {id: "3", message: "ZZZZZ"},
//                 {id: "4", message: "How you day?"},
//             ],
//             newMessageText: "New text you"
//         }
//     },
//     _callSubscriber(state: any) {
//         console.log("state was changed")
//     },
//     getState() {
//         debugger
//         return this._state
//     },
//     subscribe(observer: any) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action: any) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._callSubscriber(this._state)
//     }
// }



