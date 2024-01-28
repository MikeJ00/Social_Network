import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";

let rerenderEntireTree = (state:any) => {
    debugger
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)}
             updateNewPostText={store.updateNewPostText.bind(store)} />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);