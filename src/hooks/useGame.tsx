import { useEffect, useState } from 'react'
import { cloneDeep } from 'lodash'
import VoltorbFlip from '@/game/VoltorbFlip'

const useGame = () => {
  const [game, setGame] = useState<VoltorbFlip>()

  useEffect(() => {
    setGame(new VoltorbFlip())
  }, [])

  function updateGame(callback: (game: VoltorbFlip) => void): void {
    const newGame = cloneDeep(game)
    newGame && callback(newGame)
    setGame(newGame)
  }

  return { game, updateGame }
}

export default useGame
