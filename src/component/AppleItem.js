import React from 'react';
//函数式组件
const AppleItem = ( {apple , changeWeight , eatApple} ) => (
    <div className="appleItem">
        <div className="apple">
            <img src="../../apple.png" alt="apple" />
        </div>
        <div className="info">
            <div className="name" data-testid="123456">{apple.name}号</div>
            <div className="weight">{apple.weight}克</div>
        </div>
        <div className="btn-div">
            <button onClick={() => eatApple()}>吃掉</button>
            <button onClick={() => changeWeight()}>重量改变</button>
        </div>
    </div>
)

export default AppleItem;