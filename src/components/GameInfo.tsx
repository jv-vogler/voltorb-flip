import React from 'react'

type Props = {
  currentLevel: number
}

const GameInfo = ({ currentLevel }: Props) => {
  return (
    <>
      <div className="border-4 border-white bg-[#448563] px-16 text-center text-3xl outline outline-2 outline-gray-600">
        <div className="leading-7 drop-shadow-default">
          <p>VOLTORB Flip Lv. {currentLevel}</p>
          <p>Flip the Cards and Collect Coins!</p>
        </div>
      </div>

      <div className="flex w-11/12 gap-3 border-b-4 border-b-gray-200 pt-3 text-3xl">
        <div className="grid gap-2">
          {/* <div className=" flex h-5 w-5 translate-y-0.5 place-content-center place-items-center rounded-5 border-4 border-white bg-red-300 p-4 text-xl font-bold text-black">
            <span className="text-shadow-white">1</span>
          </div> */}
        </div>
        <p className="drop-shadow-default">...x1! ...x2! ...x3!</p>
      </div>

      <div className="flex w-11/12 gap-3 border-b-4 border-b-gray-200 pt-3 text-3xl drop-shadow-default">
        Game Over! 0!
      </div>
    </>
  )
}

export default GameInfo
