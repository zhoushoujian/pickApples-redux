import React from 'react';
import VirtualizedMasonry from './component';

const BADGE_COLORS = [
  '#f44336',
  '#3f51b5',
  '#4caf50',
  '#ff9800',
  '#2196f3',
  '#374046',
  '#cddc39',
  '#2196f3',
  '#9c27b0',
  '#ffc107',
  '#009688',
  '#673ab7',
  '#ffeb3b',
  '#cddc39',
  '#795548',
];
const COLUMN_HEIGHT = [ 200, 150, 180, 240, 120, 135, 175, 190, 220 ];
const list = new Array(1000).fill(1).map((_item, index) => {
  return {
    text: index,
    color: BADGE_COLORS[Math.floor(Math.random() * 15)],
    height: COLUMN_HEIGHT[Math.floor(Math.random() * 9)]
  };
});
const height = 600; //容器的高度
const columnWidth = 240;   //每一个砖块的宽度
const cellCount = 1000;   //砖石块的总数

const Test = () => {
  return <VirtualizedMasonry
    height={height}
    columnWidth={columnWidth}
    cellCount={cellCount}
    childElementFunc={(index, style) => {
      const info = list[index];
      return (
        <div style={{ ...style, width: columnWidth }}>
          <div
            onClick={() => console.log(info.text)}
            style={{
              backgroundColor: info.color,
              borderRadius: '0.5rem',
              height: info.height,
              marginBottom: '0.5rem',
              width: '100%',
              fontSize: 20,
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
            {info.text}
          </div>
        </div>
      );
    }} />;
};

export default Test;
