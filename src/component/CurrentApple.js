import React, {Component} from 'react';
import PropTypes from 'prop-types';

//类式组件
class CurrentApple extends Component {

    render (){
        let { apples } = this.props;
        return (
            <div className="section">
            <div className="head">当前</div>
            <div className="content">
                <span>{apples.length}个苹果,</span>
                <span>{
                    apples.length ? apples.reduce(function(total,currentValue){   {/* array.reduce(function(total, currentValue, currentIndex, arr), initialValue) */}
                     return total+currentValue.weight
                },0) : 0}克
                </span>   
            </div>
        </div>
        )
    }
}

CurrentApple.propTypes = {
    apples: PropTypes.array.isRequired
}

export default CurrentApple;