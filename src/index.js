import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Apple from './apple';
import registerServiceWorker from './registerServiceWorker';
import { appStore } from './ducks/index'
import './index.css';

const store = createStore(appStore);
{/* Provider是一个普通组件，可以作为顶层app的分发点，它只需要store属性就可以了。它会将state分发给所有被connect的组件，不管它在哪里，被嵌套多少层。 */}
window.$getState = store.getState
console.log("$getState()['apples']", window.$getState()['apples'])
ReactDOM.render(
    <Provider store={store}>   
        <Apple />   
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
