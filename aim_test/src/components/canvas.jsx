/* eslint-disable react/prop-types */
export const Canvas= (({ballSize, children}) => {
    const canvasStyle = {
        padding: ballSize,
        paddingBottom:ballSize*2,
        paddingRight:ballSize*2 
    }
    return (
        <main className="mainCanvas" style={canvasStyle}>
            {children}
        </main>
    )
})