import localFont from 'next/font/local'
import React from 'react'

const scoreFont = localFont({ src: '../../public/fonts/stacked-pixel.ttf' })

type Props = {
  totalScore: number
  currentScore: number
}

const Scoreboard = ({ currentScore, totalScore }: Props) => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <div className="flex w-11/12 place-items-center rounded-5 border-4 border-gray-300 bg-white px-2 outline outline-2 outline-gray-600">
        <div className="grow text-center text-3xl leading-7 text-gray-600 drop-shadow-soft">
          Total <span className="block">Collected Coins</span>
        </div>
        <p
          className={`${scoreFont.className} flex translate-y-1 text-6xl text-gray-700 drop-shadow-soft`}
        >
          {totalScore.toString().padStart(5, '0')}
        </p>
      </div>
      <div className="flex w-11/12 place-items-center rounded-5 border-4 border-gray-300 bg-white px-2 outline outline-2 outline-gray-600">
        <div className="grow text-center text-3xl leading-7 text-gray-600 drop-shadow-soft">
          Coins Collected in <span className="block">Current Game</span>
        </div>
        <p
          className={`${scoreFont.className} flex translate-y-1 items-center text-6xl text-gray-700 drop-shadow-soft`}
        >
          {currentScore.toString().padStart(5, '0')}
        </p>
      </div>
    </div>
  )
}

export default Scoreboard
