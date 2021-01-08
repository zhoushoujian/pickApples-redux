import React, { useState, useEffect, useRef } from 'react';

//两种解决获取不到最新状态的解决方法
//获取不到最新状态的场景：setTimeout, setInterval, ajax，回调函数，原生事件等
export default () => {

  const numberRef = useRef(1);
  const [number, setNumber] = useState(numberRef.current);

  // useEffect(() => {
  //   setInterval(() => {
  //     setNumber((num) => {
  //       console.log('num', num);
  //       //这里必须有return一个值，否则函数参数为undefined或者NaN，此方法不适用只想获取最新状态而不更新状态
  //       return num;
  //     });
  //   }, 1000);
  // }, []);

  useEffect(() => {
    setInterval(() => {
      //使用useRef配合useState可解决获取最新状态和更新状态的问题
      console.log('numberRef.current', numberRef.current);
      // numberRef.current = numberRef.current + 10;
      // setNumber(numberRef.current);
    }, 1000);
  }, []);

  const increase = () => {
    numberRef.current = number + 1;
    setNumber(numberRef.current);
  };

  return (
    <div
      style={{
        width: '100%',
        height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      <div
        style={{
          fontWeight: 600,
          fontSize: 48,
        }}
      >{number}</div>
      <div
        style={{
          marginTop: 24,
          fontSize: 32,
          cursor: 'pointer',
          border: '1px solid #ccc',
          padding: '10px 20px',
          borderRadius: 15,
          userSelect: 'none',
        }}
        onClick={increase}>click</div>
    </div>
  );
};
