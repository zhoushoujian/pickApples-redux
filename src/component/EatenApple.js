import React from 'react';
import PropTypes from 'prop-types';

const AteApples = ({ apples }) => (
    <div className="section">
        <div className="head">已吃掉</div>
        <div className="content">
            <span>{apples.length}个苹果,</span>
            <span>{apples.length ? apples.reduce(function(total,value){
                  return total + value.weight
            },0) : 0}克</span>
        </div>
    </div>
)
AteApples.propTypes = {
    apples: PropTypes.array.isRequired
}

export default AteApples;