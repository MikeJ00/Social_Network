import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {RootStateType} from "./redux/store";

function App(props: RootStateType) {
    debugger
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs'
                           render={() => <Dialogs
                               dialogsData={props.state.dialogsPage.dialogsData}
                               messagesData={props.state.dialogsPage.messagesData}
                               newMessageText={props.state.dialogsPage.newMessageText}
                               dispatch={props.dispatch}
                               // addMessagePost={props.addMessagePost}
                               // updateNewMessageText={props.updateNewMessageText}
                           />}/>
                    <Route exact path='/profile'
                           render={() => <Profile postsData={props.state.profilePage.postsData}
                                                  newPostText={props.state.profilePage.newPostText}
                                                  dispatch={props.dispatch}
                               // addPost={props.addPost}
                               // updateNewPostText={props.updateNewPostText}
                           />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
