import React from 'react';
import CurrentAppleContainer from './component/CurrentAppleContainer';
import EatenAppleContainer from './component/EatenAppleContainer';
import AppleListContainer from './component/AppleListContainer';
import './App.css';

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
