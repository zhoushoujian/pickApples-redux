import {combineReducers} from 'redux'
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
         /* state.map((v) => {
           console.log("v",v)
         }) */
         //console.log('action.apple',action)
         return state.map((v,i) => v.id === action.apple.id ? { ...v,weight: parseInt(Math.random()*1000,10) } : v)
      case 'EAT_APPLE' :
         //console.log('action.apple',action)
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
    type: 'PICK_APPLE',
    id: index++,
    apple
  }
}

export const changeWeight = (apple) => {
  return {
    type: 'CHANGE_WEIGHT',   //一般 type 的内容使用 大写字母+下划线 的格式。
    apple
  }
}
export const eatApple = (apple) => {
  return {
    type: 'EAT_APPLE',
    apple
  }
}