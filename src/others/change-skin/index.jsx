import React from "react";
import "./index.less";

const colors = ["#000", "#ff0", "#f00", "#f0f", "#0ff", "#00f", "#0f0"];

//这里只是用css来举例，实际上css module, less和sass也是可以的，原理是利用css变量来替代less变量或sass变量，然后使用更改css变量的方式来改变css
const ChangeSkin = ({ text = "click me" }) => {
  const changeColor = () => {
    const root = document.documentElement;
    root.style.setProperty(
      "--primary-color",
      colors[Math.floor(Math.random() * colors.length)]
    );
  };

  return (
    <div className="loading" onClick={changeColor}>
      {text}
    </div>
  );
};

export default ChangeSkin;
