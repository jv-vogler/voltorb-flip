import React from 'react'
import Card from './Card'
import Image from 'next/image'
import voltorb from '../../public/images/voltorb.png'

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
        <div className="flex gap-4">
          <Card fake={true}>1</Card>
          <Card fake={true}>2</Card>
          <Card fake={true}>3</Card>
        </div>
        <p className="drop-shadow-default">...x1! ...x2! ...x3!</p>
      </div>

      <div className="mr-4 flex w-8/12 gap-3 self-end border-b-4 border-b-gray-200 pt-3 text-3xl ">
        <Card fake={true}>
          <Image src={voltorb} alt="voltorb" className="picture-outline" />
        </Card>
        <p className="drop-shadow-default">Game Over! 0!</p>
      </div>
    </>
  )
}

export default GameInfo
