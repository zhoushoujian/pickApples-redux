import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ChangeSkin from "./others/change-skin";
import registerServiceWorker from "./registerServiceWorker";
import { appStore } from "./ducks/index";
import "./index.css";

export const store = createStore(appStore);
console.log("store.getState().apples)", store.getState().apples);
ReactDOM.render(
  <Provider store={store}>
    <ChangeSkin />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
