import {connect} from 'react-redux';
import AppleList from '../component/AppleList';
import {pickApple,changeWeight,eatApple} from '../ducks';
const getApple = (apples) => {
    return apples.filter((v) => v.eaten === false);
}

const mapStateToProps = (state) => {
    return {
        apples : getApple(state.apples)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        pickApple : (apple) => dispatch(pickApple(apple)),
        changeWeight : (apple) => dispatch(changeWeight(apple)),
        eatApple : (apple) => dispatch(eatApple(apple))
    };
};

const AppleListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppleList);
  
export default AppleListContainer;