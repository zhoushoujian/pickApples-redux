import React from 'react';
import CurrentApple from './component/currentApple';
import EatenApple from './component/eatenApple';
import AppleList from './component/appleList';
import './apple.css';

const Apple = () => {
    return (
        <div className="appleBasket">
            <div className="title">苹果篮子(redux)</div>
            <div className="stats">
                <CurrentApple />
                <EatenApple />
            </div>
            <AppleList />
        </div>
    )
}

export default Apple;
