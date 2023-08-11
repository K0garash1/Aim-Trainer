/* eslint-disable react/prop-types */

import { useState } from 'react';
import { calculateNewBallPosition } from '../utils/utils';
import clickAudio from '../assets/click.ogg';

const TargetBall = ({ incrementScore, ballSize, backgroundColor, textColor, children }) => {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const posX = `${position.x}%`;
  const posY = `${position.y}%`;
  const newBallSize = ballSize / 1;
  const clickSound = new Audio(clickAudio);
  const ballStyle = {
    width: newBallSize,
    height: newBallSize,
    fontSize: newBallSize / 2,
    backgroundColor: backgroundColor,
    color: textColor,
    top: posY,
    left: posX,
  };

  const handleClickOnBall = () => {
    clickSound.play();
    setPosition(calculateNewBallPosition());
    incrementScore(children + 1);
  };

  return (
    <div className="Ball" style={ballStyle} onClick={handleClickOnBall}>
      {children + 1}
    </div>
  );
};

export { TargetBall };