import './styles/App.css';
import { Canvas } from './components/canvas';
import { Ball } from './components/ball';
import { useState } from 'react';

function App() {
  const [size, setSize] = useState(50)
  const [score, setScore] = useState(0)
  const handleSizeChange = (event) =>{
    setSize(event.target.value)
  }
  return (
    <>
      <Canvas ballSize={size}>
        <Ball
          BgColor={'#fff'}
          TextColor={'#000'}
          size={size}
          addScore={setScore}
        >
          {score}
        </Ball>
      </Canvas>

      <aside className='mainMenu'>
        <h1>Aim Trainer</h1>
        <div className='optionContainer'>
          <strong>Tamaño</strong>
          <input type="range" min="40" max="200" onChange={handleSizeChange}/>
        </div>
        {/*TODO*/}
        <div className='optionContainer'>
          <strong>Velocidad</strong>
          <input type="range" min="100" max="2000" />
        </div>
        {/*TODO*/}
        <div className='optionContainer'>
          <strong>Tema</strong>
          <select id="selectBox" name="selectBox">
            <option value="opcion2">Oscuro</option>
            <option value="opcion1">Claro</option>
          </select>
        </div>
        <div className='optionContainer'>
          <strong>Score: </strong>
          {score}
        </div>
      </aside>
    </>
  );
}

export default App;