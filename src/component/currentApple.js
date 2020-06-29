import React from 'react';
import {connect} from 'react-redux'

class CurrentApple extends React.Component {

    render (){
        let { apples } = this.props;
        apples = apples.filter((v) => v.eaten === false)
        return (
            <div className="section">
                <div className="head">当前</div>
                <div className="content">
                    <span>{apples.length}个苹果,</span>
                    <span>
                        {
                            apples.length 
                            ? apples.reduce(function(total, currentValue){
                                    return total + currentValue.weight
                                }, 0) 
                            : 0
                        }克
                    </span>   
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        apples: state.apples  //apples会被传到顶层store，然后store将属性分发给被connect连接的属性
    };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentApple)