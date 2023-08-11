/* eslint-disable react/prop-types */
import { useState } from 'react';
import { getBallPos } from '../utils/utils';
import clickAudio from '../assets/click.ogg';

export const Ball = ({addScore, size, BgColor, TextColor, children }) => {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const posX = `${position.x}%`;
    const posY = `${position.y}%`;
    const newSize = size/1
    const clickSound = new Audio(clickAudio)
    const ballStyle = {
        width: newSize,
        height: newSize,
        fontSize: newSize / 2,
        backgroundColor: BgColor,
        color: TextColor,
        top: posY,
        left: posX
    }
    const countPoint = () => {
        clickSound.play()
        setPosition(getBallPos)
        addScore(children+1)
    }
  return (
    <div className="Ball" style={ballStyle} onClick={() => countPoint()}>
      {children+1}
    </div>
  );
};