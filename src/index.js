import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { appStore } from './ducks/index'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(appStore);
{/* Provider是一个普通组件，可以作为顶层app的分发点，它只需要store属性就可以了。它会将state分发给所有被connect的组件，不管它在哪里，被嵌套多少层。 */}
// ReactDOM.render(
// <Provider store={store}>   
//     <App />   
// </Provider>
// , document.getElementById('root'));
// registerServiceWorker();
