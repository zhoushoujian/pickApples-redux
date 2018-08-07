import {connect} from 'react-redux'
import AteApples from '../component/EatenApple'
const getEatenAppleContainer = apples => {
    return apples.filter((v) => v.eaten === true)
}

const mapStateToProps = (state) => {
    //console.log('state',state)
    return {
        apples : getEatenAppleContainer(state.apples)
    }
}

const mapDispatchToProps = () => {
    return {
        
    }
}

const EatenAppleContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AteApples)

export default EatenAppleContainer