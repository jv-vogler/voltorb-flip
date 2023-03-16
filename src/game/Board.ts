import _ from 'lodash'
import Level from './Level'

type FlagValues = { 1: boolean; 2: boolean; 3: boolean; V: boolean }

export type CellValue = 1 | 2 | 3 | 'V'

type Cell = {
  value: CellValue
  flags: FlagValues
  isFlipped: boolean
  isFlagged: boolean
}

type RowColValues = {
  coins: number
  voltorbs: number
}

export default class Board {
  private _board: Cell[][]
  private _flippedCells: number
  private _maxLevelScore: number
  private _rowValues: RowColValues[]
  private _colValues: RowColValues[]

  constructor(level: Level) {
    this._rowValues = Array(5)
      .fill(0)
      .map(() => ({ coins: 0, voltorbs: 0 }))
    this._colValues = Array(5)
      .fill(0)
      .map(() => ({ coins: 0, voltorbs: 0 }))
    this._board = this.createBoard(level)
    this._flippedCells = 0
    this._maxLevelScore = level.levelData.coins
  }

  public flagCell(row: number, col: number, flag: CellValue): void {
    const cell: Cell = this._board[row][col]
    if (cell.isFlipped) return

    cell.flags[flag] = !cell.flags[flag]
    cell.isFlagged = Object.values(cell.flags).some(value => value === true)
  }

  public flipCell(row: number, col: number): CellValue {
    const cell: Cell = this._board[row][col]
    if (cell.value !== 'V' && !cell.isFlipped) this._flippedCells += 1
    if (!cell.isFlipped) {
      cell.isFlipped = true
      cell.flags = { 1: false, 2: false, 3: false, V: false }
    }

    return cell.value
  }

  private createBoard(level: Level) {
    const board: Cell[][] = [...Array(5)].map(() => Array.from({ length: 5 }))
    const { x2, x3, voltorbs } = level.levelData

    const levelValuesArray: CellValue[] = [
      ...Array(x2).fill(2),
      ...Array(x3).fill(3),
      ...Array(voltorbs).fill('V'),
    ]
    const remainingFillArray: 1[] = Array(25 - levelValuesArray.length).fill(1)
    const shuffledValuesArray: CellValue[] = _.shuffle([
      ...levelValuesArray,
      ...remainingFillArray,
    ])

    let index = 0
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        const cell = {
          value: shuffledValuesArray[index],
          flags: { 1: false, 2: false, 3: false, V: false },
          isFlagged: false,
          isFlipped: false,
        } as Cell

        if (cell.value === 'V') {
          this._rowValues[row].voltorbs += 1
          this._colValues[col].voltorbs += 1
        } else {
          this._rowValues[row].coins += cell.value
          this._colValues[col].coins += cell.value
        }

        board[row][col] = cell
        index++
      }
    }
    return board
  }

  get cells() {
    return this._board
  }

  get flippedCells() {
    return this._flippedCells
  }

  get rowValues() {
    return this._rowValues
  }

  get colValues() {
    return this._colValues
  }

  get maxLevelScore() {
    return this._maxLevelScore
  }
}
