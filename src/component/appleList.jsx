import React from "react";
import { connect } from "react-redux";
import { pickApple, changeWeight, eatApple } from "../ducks";

class AppleList extends React.Component {
  render() {
    const { pickApple, changeWeight, eatApple } = this.props;
    let { apples } = this.props;
    apples = apples.filter((v) => v.eaten === false);
    return (
      <div>
        {apples.map((item, index) => (
          <div className="appleItem" key={index}>
            <div className="apple">
              <img src="../../apple.png" alt="apple" />
            </div>
            <div className="info">
              <div className="name" data-testid="123456">
                {item.name}号
              </div>
              <div className="weight">{item.weight}克</div>
            </div>
            <div className="btn-div">
              <button onClick={() => eatApple(item)}>吃掉</button>
              <button onClick={() => changeWeight(item)}>重量改变</button>
            </div>
          </div>
        ))}
        <div style={{ textAlign: "center" }} className="btn-div">
          <button style={style.btn} onClick={() => pickApple(apples)}>
            摘苹果
          </button>
        </div>
      </div>
    );
  }
}

const style = {
  btn: {
    backgroundColor: "#096",
    padding: "10px 45px",
    margin: "10px auto",
  },
};

const mapStateToProps = (state) => {
  return {
    apples: state.apples,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pickApple: (apple) => dispatch(pickApple(apple)),
    changeWeight: (apple) => dispatch(changeWeight(apple)),
    eatApple: (apple) => dispatch(eatApple(apple)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppleList);
