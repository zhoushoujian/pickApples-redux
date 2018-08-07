import React from 'react'
import AppleItem from './AppleItem'
import PropTypes from 'prop-types';

const AppleList = ( { apples,pickApple,changeWeight,eatApple } ) => {
    return (
        <div>
       {apples.map((v,i) => <AppleItem key={i} apple={v} changeWeight={() => changeWeight(v)} eatApple={() => eatApple(v)} />)}
       <div style={ { textAlign:'center' } } className="btn-div">
            <button style={ style.btn } onClick={() => pickApple(apples)}>摘苹果</button>
        </div>
    </div>
    )
}

const style = {
    
    btn: {
        backgroundColor: '#096',
        padding: '10px 45px',
        margin: '10px auto'
    }

}

AppleList.propTypes = {
    apples: PropTypes.array.isRequired,
    /* pickApple : PropTypes.func.isRequierd,
    changeWeight : PropTypes.func.isRequierd,
    eatApple : PropTypes.func.isRequierd */
}

export default AppleList