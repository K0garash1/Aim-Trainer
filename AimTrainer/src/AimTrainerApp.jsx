/* eslint-disable react/prop-types */

import './styles/App.css';
import { CanvasContainer } from './components/CanvasContainer';
import { TargetBall } from './components/TargetBall';
import { MainMenu } from './components/MainMenu';
import { useState } from 'react';

const darkTheme = {
  AppBackgroundColor: '#111',
  AppTextColor: '#fff',
  CanvasBackgroundColor: '#222',
  BallBackgroundColor: '#fff',
  BallTextColor: '#000'
}

const lightTheme = {
  AppBackgroundColor: '#e0e0e0',
  AppTextColor: '#000',
  CanvasBackgroundColor: '#f0f0f0',
  BallBackgroundColor: '#000',
  BallTextColor: '#fff'
}

function AimTrainerApp() {
  const [ballSize, setBallSize] = useState(50);
  const [currentScore, setCurrentScore] = useState(0);
  const [theme, setTheme] = useState(darkTheme)

  const handleBallSizeChange = (event) => {
    setBallSize(event.target.value);
  };

  const handleSpeedChange = (event) => {
    // TODO: Handle speed change logic
  };

  const handleThemeChange = (event) => {
    if (event.target.value == 'dark') {
      setTheme(darkTheme)
    } else {
      setTheme(lightTheme)
    }
  };

  return (
    <>
      <CanvasContainer ballSize={ballSize} backgroundColor={theme.CanvasBackgroundColor}>
        <TargetBall backgroundColor={theme.BallBackgroundColor} textColor={theme.BallTextColor} ballSize={ballSize} incrementScore={setCurrentScore}>
          {currentScore}
        </TargetBall>
      </CanvasContainer>

      <MainMenu
        theme={theme}
        ballSize={ballSize}
        handleBallSizeChange={handleBallSizeChange}
        handleSpeedChange={handleSpeedChange}
        handleThemeChange={handleThemeChange}
        currentScore={currentScore}
      />
    </>
  );
}

export default AimTrainerApp;