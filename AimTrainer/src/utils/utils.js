export function calculateNewBallPosition() {
  const position = {
    x: Math.round(Math.random() * 100),
    y: Math.round(Math.random() * 100)
  }
  return position
}