import {combineReducers} from 'redux';

//reducer
const apples = (state = [],action) => {
    switch(action.type) {
      case 'PICK_APPLE':
         return [
             ...state,
             {
              name: parseInt(Math.random()*100000,10),
              weight: parseInt(Math.random()*1000,10),
              id: action.id,
              eaten: false
             }
         ]
      case 'CHANGE_WEIGHT':
         return state.map((v,i) => v.id === action.apple.id ? { ...v,weight: parseInt(Math.random()*1000,10)} : v)
      case 'EAT_APPLE' :
         return state.map((v,i) => v.id === action.apple.id ? {...v,eaten: true} : v)
      default: 
         return state
    }
}

//actions
export const appStore = combineReducers({
  apples : apples
})

let index = 0;
export const pickApple = (apple) => {
  return {
    type: 'PICK_APPLE',   //一般 type 的内容使用 大写字母+下划线 的格式。
    id: index++,
    apple
  }
}

export const changeWeight = (apple) => ({type: 'CHANGE_WEIGHT',apple});
export const eatApple = (apple) => ({type: 'EAT_APPLE',apple});