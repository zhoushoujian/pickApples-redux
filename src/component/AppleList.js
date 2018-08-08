import React,{Component} from 'react';
import AppleItem from './AppleItem';

//匿名类式组件，仅作了解，非常不建议使用
export default class extends Component {
    
    render (){
        let { apples,pickApple,changeWeight,eatApple } = this.props;
        return (
            <div>
                {apples.map((v,i) => <AppleItem key={i} apple={v} changeWeight={() => changeWeight(v)} eatApple={() => eatApple(v)} />)}
                <div style={ { textAlign:'center' } } className="btn-div">
                    <button style={ style.btn } onClick={() => pickApple(apples)}>摘苹果</button>
                </div>
            </div>
        )
    }
}

const style = {
    
    btn: {
        backgroundColor: '#096',
        padding: '10px 45px',
        margin: '10px auto'
    }

}
