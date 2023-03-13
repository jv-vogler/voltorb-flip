import Board from './Board'
import Level from './Level'

type GameStatus = 'playing' | 'win' | 'lose'

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

  public flipCell(row: number, col: number): void {
    const cellValue = this._board.flipCell(row, col)
    if (cellValue === 'V') {
      if (this._board.flippedCells < this._currentLevel) {
        this._currentLevel = this._board.flippedCells - 1
      }
      this._gameStatus = 'lose'
    } else {
      // score multiplier
      // check if player found all multipliers
      // advance level
      // gameStatus = won
    }
  }

  public advanceLevel(): void {
    this._currentLevel = Math.min(this._currentLevel + 1, 8)
    this.restartGame()
  }

  public restartGame(): void {
    this._currentScore = 0
    this._level = new Level(this._currentLevel)
    this._board = new Board(this._level)
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
