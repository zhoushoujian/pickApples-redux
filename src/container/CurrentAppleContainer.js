import {connect} from 'react-redux'
import CurrentApple from '../component/CurrentApple'

const getCurrentAppleContainer = apples => {
    return apples.filter((v) => v.eaten === false)
}

const mapStateToProps = (state) => {
    //console.log("state",state)
    return {
        apples : getCurrentAppleContainer(state.apples)   //apples会被传到顶层store，然后store将属性分发给被connect连接的属性
    }
}

const mapDispatchToProps = () => {
    return {
        
    }
}

const CurrentAppleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrentApple)

export default CurrentAppleContainer