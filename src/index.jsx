import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Apple from './apple';
import registerServiceWorker from './registerServiceWorker';
import { appStore } from './ducks/index';
import './index.css';

const store = createStore(appStore);
window.$getState = store.getState;
console.log("$getState()['apples']", window.$getState().apples);
ReactDOM.render(
    <Provider store={store}>   
        <Apple />   
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
