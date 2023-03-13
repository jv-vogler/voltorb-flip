import { LEVELS } from '@/utils/constants'

export default class Level {
  private _x2: number
  private _x3: number
  private _voltorbs: number
  private _coins: number

  constructor(level: number) {
    const currentLevel = LEVELS[level][Math.floor(Math.random() * 5)]
    this._x2 = currentLevel.x2
    this._x3 = currentLevel.x3
    this._voltorbs = currentLevel.voltorbs
    this._coins = currentLevel.coins
  }

  get levelData() {
    return {
      x2: this._x2,
      x3: this._x3,
      voltorbs: this._voltorbs,
      coins: this._coins,
    }
  }
}
