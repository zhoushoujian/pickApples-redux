import { combineReducers } from "redux";

//actionType
const PICK_APPLE = "PICK_APPLE";
const CHANGE_WEIGHT = "CHANGE_WEIGHT";
const EAT_APPLE = "EAT_APPLE";

const initialState = [
  {
    name: parseInt(Math.random() * 100000),
    weight: parseInt(Math.random() * 1000),
    id: 0,
    eaten: false,
  },
];

//reducer
const apples = (state = initialState, action) => {
  switch (action.type) {
    case PICK_APPLE:
      return [
        ...state,
        {
          name: parseInt(Math.random() * 100000),
          weight: parseInt(Math.random() * 1000),
          id: action.id,
          eaten: false,
        },
      ];
    case CHANGE_WEIGHT:
      return state.map((v) => (v.id === action.apple.id
        ? { ...v, weight: parseInt(Math.random() * 1000) }
        : v));
    case EAT_APPLE:
      return state.map((v) => (v.id === action.apple.id ? { ...v, eaten: true } : v));
    default:
      return state;
  }
};

export const appStore = combineReducers({
  apples,
});

let index = 1;
//actions
export const pickApple = (apple) => {
  return {
    type: PICK_APPLE, //一般 type 的内容使用 大写字母+下划线 的格式。
    // eslint-disable-next-line no-plusplus
    id: index++,
    apple,
  };
};

export const changeWeight = (apple) => ({
  type: CHANGE_WEIGHT,
  apple,
});
export const eatApple = (apple) => ({
  type: EAT_APPLE,
  apple,
});
