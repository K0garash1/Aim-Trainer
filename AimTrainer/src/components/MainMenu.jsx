/* eslint-disable react/prop-types */
const MainMenu = ({ theme, ballSize, handleBallSizeChange, handleSpeedChange, handleThemeChange, currentScore }) => {
    return (
        <aside className='mainMenu' style={{ backgroundColor: theme.AppBackgroundColor, color: theme.AppTextColor }}>
            <h1>Aim Trainer</h1>
            <div className='optionContainer'>
                <strong>Tamaño</strong>
                <input type="range" min="40" max="200" value={ballSize} onChange={handleBallSizeChange} />
            </div>
            <div className='optionContainer'>
                <strong>Velocidad</strong>
                <input type="range" min="100" max="2000" onChange={handleSpeedChange} />
            </div>
            <div className='optionContainer'>
                <strong>Tema</strong>
                <select id="selectBox" name="selectBox" onChange={handleThemeChange}>
                    <option value="dark">Oscuro</option>
                    <option value="light">Claro</option>
                </select>
            </div>
            <div className='optionContainer'>
                <strong>Score: </strong>
                {currentScore}
            </div>
        </aside>
    );
};

export { MainMenu }