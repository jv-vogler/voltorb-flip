import Board from '@/game/Board'
import Level from '@/game/Level'

describe('Board', () => {
  const possibleCellValues = [1, 2, 3, 'V']
  let board: Board
  let level: Level

  beforeEach(() => {
    level = new Level(1)
    board = new Board(level)
  })

  it('should flip a cell and return its value', () => {
    const cellValue = board.flipCell(0, 0)
    expect(possibleCellValues).toContain(cellValue)
  })

  it('should throw an error if passing row lesser than 0', () => {
    expect(() => board.flipCell(-1, 0)).toThrow()
  })

  it('should throw an error if passing row greater than 5', () => {
    expect(() => board.flipCell(5, 0)).toThrow()
  })

  it('should throw an error if passing col lesser than 0', () => {
    expect(() => board.flipCell(0, -1)).toThrow()
  })

  it('should throw an error if passing col greater than 5', () => {
    expect(() => board.flipCell(0, 5)).toThrow()
  })
})
