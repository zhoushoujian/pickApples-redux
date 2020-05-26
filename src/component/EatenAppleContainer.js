import React from 'react';
import {connect} from 'react-redux';

const AteApples = ({ apples }) => {
    apples = apples.filter((v) => v.eaten === true);
    return (
        <div className="section">
            <div className="head">已吃掉</div>
            <div className="content">
                <span>{apples.length}个苹果,</span>
                <span>
                    {
                        apples.length 
                        ?   apples.reduce(function(total,value){
                                return total + value.weight
                            }, 0) 
                        : 0
                    }
                    克
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({apples : state.apples});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AteApples);