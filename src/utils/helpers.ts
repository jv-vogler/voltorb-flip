export const indexToCoordinate = (index: number, gridSize = 5) => {
  const x = Math.floor(index / gridSize)
  const y = index % gridSize
  const coordinate = [x, y]

  return coordinate
}

export const coordinateToIndex = (x: number, y: number, gridSize = 5) => {
  return x * gridSize + y
}
