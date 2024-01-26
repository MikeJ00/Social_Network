import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreStateType} from "./redux/state";

function App(props: StoreStateType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/messages'
                           render={() => <Dialogs dialogsData={props.store.state.dialogsPage.dialogsData}
                                                  messagesData={props.store.state.dialogsPage.messagesData}
                                                  newMessageText={props.store.state.dialogsPage.newMessageText}
                                                  addMessagePost={props.store.addMessagePost}
                                                  updateNewMessageText={props.store.updateNewMessageText}
                           />}/>
                    <Route exact path='/profile'
                           render={() => <Profile postsData={props.store.state.profilePage.postsData}
                                                  addPost={props.store.addPost}
                                                  newPostText={props.store.state.profilePage.newPostText}
                                                  updateNewPostText={props.store.updateNewPostText}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
