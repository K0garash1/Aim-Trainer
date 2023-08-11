/* eslint-disable react/prop-types */

const CanvasContainer = ({ ballSize, backgroundColor, children }) => {
  const canvasStyle = {
    padding: ballSize,
    paddingBottom: ballSize * 2,
    paddingRight: ballSize * 2,
    backgroundColor: backgroundColor
  };

  return (
    <main className="mainCanvas" style={canvasStyle}>
      {children}
    </main>
  );
};

export { CanvasContainer }; // Exportando el componente Canvas correctamente