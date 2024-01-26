import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, subscribe} from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}

rerenderEntireTree();

subscribe(rerenderEntireTree);