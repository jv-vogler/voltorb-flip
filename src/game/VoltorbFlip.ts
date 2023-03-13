import Board, { CellValue } from './Board'
import Level from './Level'

type GameStatus = 'playing' | 'win' | 'lose' | 'memo'

export default class VoltorbFlip {
  private _board: Board
  private _totalScore: number
  private _currentScore: number
  private _currentLevel: number
  private _level: Level
  private _gameStatus: GameStatus

  constructor() {
    this._level = new Level(0)
    this._currentLevel = 0
    this._currentScore = 0
    this._totalScore = 0
    this._gameStatus = 'playing'
    this._board = new Board(this._level)
  }

  public toggleMemo() {
    this._gameStatus === 'playing'
      ? (this._gameStatus = 'memo')
      : (this._gameStatus = 'playing')
  }

  public flagCell(row: number, col: number, flag: CellValue): void {
    this._board.flagCell(row, col, flag)
  }

  public flipCell(row: number, col: number): void {
    const cellValue = this._board.flipCell(row, col)

    if (cellValue === 'V') {
      if (this._board.flippedCells < this._currentLevel) {
        this._currentLevel = this._board.flippedCells - 1
      }
      this._gameStatus = 'lose'
      return
    }
    this._currentScore === 0
      ? (this._currentScore = cellValue)
      : (this._currentScore *= cellValue)

    if (this._currentScore === this._board.maxLevelScore) {
      this.advanceLevel()
    }
  }

  public restartGame(): void {
    this._gameStatus = 'playing'
    this._currentScore = 0
    this._level = new Level(this._currentLevel)
    this._board = new Board(this._level)
  }

  private advanceLevel(): void {
    this._currentLevel = Math.min(this._currentLevel + 1, 8)
    this._totalScore += this._currentScore
    this.restartGame()
  }

  get board() {
    return this._board
  }

  get gameStatus() {
    return this._gameStatus
  }

  get currentScore() {
    return this._currentScore
  }

  get totalScore() {
    return this._totalScore
  }

  get currentLevel() {
    return this._currentLevel + 1
  }
}
