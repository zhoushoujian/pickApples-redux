import React from 'react';
import './App.css';
import CurrentAppleContainer from './container/CurrentAppleContainer';
import EatenAppleContainer from './container/EatenAppleContainer';
import AppleListContainer from './container/AppleListContainer';

const App = () => {
    return (
        <div className="appleBasket">
            <div className="title">苹果篮子</div>
            <div className="stats">
                <CurrentAppleContainer />
                <EatenAppleContainer />
            </div>
            <AppleListContainer />
        </div>
    )
}

export default App;
