import React from 'react'
import localFont from 'next/font/local'

const numberFont = localFont({ src: '../../public/fonts/m5x7.ttf' })

type Props = {
  children: React.ReactNode
}

const Card = ({ children }: Props) => {
  return (
    <div className="box-content flex h-10 w-10 select-none rounded-sm border-2 border-gray-700 outline outline-4 outline-gray-200">
      <div
        className={`${numberFont.className} text-shadow-white flex h-full w-full place-content-center place-items-center border-2 border-[#a55a52] bg-[#bd8c84] text-3xl font-bold text-black`}
      >
        {children}
      </div>
    </div>
  )
}

export default Card
