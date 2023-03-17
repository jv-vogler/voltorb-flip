import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Card from './Card'
import RowColCard from './RowColCard'
import VoltorbFlip from '@/game/VoltorbFlip'
import voltorb from '../../public/images/voltorb.png'
import { indexToCoordinate } from '@/utils/helpers'

type Props = {
  game: VoltorbFlip
  updateGame: (callback: (game: VoltorbFlip) => void) => void
}

const Gameboard = ({ game, updateGame }: Props) => {
  const [cardsFlipped, setCardsFlipped] = useState<{ isFlipped: boolean }[]>(
    game.cells.flat().map(cell => ({ isFlipped: cell.isFlipped }))
  )

  useEffect(() => {
    setCardsFlipped(() =>
      game.cells.flat().map(cell => ({ isFlipped: cell.isFlipped }))
    )
  }, [game.cells])

  useEffect(() => {
    if (game.gameStatus === 'lose' || game.gameStatus === 'win') {
      const columns = [
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
      ]
      setTimeout(() => {
        setCardsFlipped(() => cardsFlipped.map(() => ({ isFlipped: true })))
      }, 1000)

      setTimeout(() => {
        let delay = 0
        for (let col = 0; col < 5; col++) {
          setTimeout(() => {
            setCardsFlipped(prev =>
              prev.map((card, index) =>
                columns[col].includes(index) ? { isFlipped: false } : card
              )
            )
          }, delay)
          delay += 200
        }
        setTimeout(() => {
          updateGame(g => g.restartGame())
        }, delay + 200)
      }, 2500)
    }
  }, [game.gameStatus])

  function handleFlip(row: number, col: number) {
    updateGame(g => {
      g.flipCell(row, col)
    })
  }

  return (
    <div className="relative h-96 w-full border-4 border-white bg-[#448563] p-1.5 outline outline-2 outline-gray-600">
      {(game.gameStatus === 'lose' || game.gameStatus === 'win') && (
        <div className="absolute inset-0 z-50 h-full w-full bg-blue-500 opacity-0"></div>
      )}
      <div className="flex h-full w-full rounded-xl bg-[#58a66c] p-2">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="grid grid-cols-5 gap-4">
              {game.cells.flat().map((cell, i) => {
                const coordinate = indexToCoordinate(i)
                return (
                  <Card
                    key={i}
                    isFlipped={cardsFlipped[i].isFlipped}
                    flipCard={() => handleFlip(coordinate[0], coordinate[1])}
                  >
                    {cell.value === 'V' ? (
                      <Image
                        src={voltorb}
                        alt="voltorb"
                        className="picture-outline voltorb"
                      />
                    ) : (
                      cell.value
                    )}
                  </Card>
                )
              })}

              {game.colValues.map((col, index) => (
                <RowColCard
                  coins={col.coins}
                  voltorbs={col.voltorbs}
                  key={index}
                  index={index}
                />
              ))}
            </div>
            <div className="flex flex-col gap-[17.5px]">
              {game.rowValues.map((row, index) => (
                <RowColCard
                  coins={row.coins}
                  voltorbs={row.voltorbs}
                  key={index}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gameboard
