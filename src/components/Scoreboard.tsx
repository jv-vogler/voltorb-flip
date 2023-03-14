import React from 'react'

type Props = {
  totalScore: number
  currentScore: number
}

const Scoreboard = ({ currentScore, totalScore }: Props) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex w-11/12 bg-white p-2 text-black">
        <div className="border-2 border-blue-500">
          Total <span>Collected Coins</span>
        </div>
        <p className="border-2 border-red-500">
          {totalScore.toString().padStart(5, '0')}
        </p>
      </div>
      <div className="flex w-11/12 bg-white p-2 text-black">
        <div className="border-2 border-blue-500">
          Total <span>Collected Coins</span>
        </div>
        <p className="border-2 border-red-500">
          {currentScore.toString().padStart(5, '0')}
        </p>
      </div>
    </div>
  )
}

export default Scoreboard
