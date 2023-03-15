import VoltorbFlip from '@/game/VoltorbFlip'
import Image from 'next/image'
import React from 'react'
import Card from './Card'
import voltorb from '../../public/images/voltorb.png'
import RowColCard from './RowColCard'
import { indexToCoordinate } from '@/utils/helpers'

type Props = {
  game: VoltorbFlip
  updateGame: (callback: (game: VoltorbFlip) => void) => void
}

const Gameboard = ({ game, updateGame }: Props) => {
  return (
    <div className="h-96 w-full border-4 border-white bg-[#448563] p-1.5 outline outline-2 outline-gray-600">
      <div className="flex h-full w-full rounded-xl bg-[#58a66c] p-2">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="grid grid-cols-5 gap-4">
              {game.board.cells.flat().map((cell, i) => {
                const coordinate = indexToCoordinate(i)
                return (
                  <Card
                    key={i}
                    row={coordinate[0]}
                    col={coordinate[1]}
                    isFlipped={cell.isFlipped}
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
              {game.board.colValues.map((col, index) => (
                <RowColCard
                  coins={col.coins}
                  voltorbs={col.voltorbs}
                  key={index}
                  index={index}
                />
              ))}
            </div>
            <div className="flex flex-col gap-[17.5px]">
              {game.board.rowValues.map((row, index) => (
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
