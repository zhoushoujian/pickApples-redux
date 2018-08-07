import React from 'react';
import PropTypes from 'prop-types';

const CurrentApple = ( {apples} ) => (
    <div className="section">
        <div className="head">当前</div>
        <div className="content">
            <span>{apples.length}个苹果,</span>
            <span>{
                apples.length ? apples.reduce(function(total,currentValue){
                 return total+currentValue.weight
            },0) : 0
            }克</span>    {/* array.reduce(function(total, currentValue, currentIndex, arr), initialValue) */}
        </div>
    </div>
)

CurrentApple.propTypes = {
    apples: PropTypes.array.isRequired
}

export default CurrentApple;