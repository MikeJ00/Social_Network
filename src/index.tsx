import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessagePost, addPost, state, subscribe, updateNewMessageText, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
             addMessagePost={addMessagePost} updateNewMessageText={updateNewMessageText} />,
        document.getElementById('root')
    );
}

rerenderEntireTree();

subscribe(rerenderEntireTree);