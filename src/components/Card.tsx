import React from 'react'
import localFont from 'next/font/local'

const numberFont = localFont({ src: '../../public/fonts/m5x7.ttf' })

type Props = {
  children: React.ReactNode
  fake?: boolean
}

const Card = ({ children, fake }: Props) => {
  return fake ? (
    <div className="relative box-content flex h-10 w-10 select-none rounded-sm border-2 border-gray-700 outline outline-4 outline-gray-200">
      <div
        className={`${numberFont.className} text-shadow-white flex h-full w-full place-content-center place-items-center border-2 border-[#a55a52] bg-[#bd8c84] text-3xl font-bold text-black`}
      >
        {children}
      </div>
    </div>
  ) : (
    <div className="group cursor-pointer [perspective:1000px]">
      <div className="relative box-content flex h-10 w-10 select-none rounded-sm border-2 border-gray-700 outline outline-4 outline-gray-200 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div
          className={`${numberFont.className} text-shadow-white flex h-full w-full place-content-center place-items-center border-2 border-[#a55a52] bg-[#bd8c84] text-3xl font-bold text-black [transform:rotateY(180deg)]`}
        >
          {children}
        </div>
        <div className="absolute inset-0 grid h-full w-full grid-cols-3 bg-white [backface-visibility:hidden]">
          <div className="h-full w-full bg-[#448563]"></div>
          <div className="h-full w-full bg-[#58a66c]"></div>
          <div className="h-full w-full bg-[#448563]"></div>
          <div className="h-full w-full bg-[#58a66c]"></div>
          <div className="h-full w-full bg-[#448563]"></div>
          <div className="h-full w-full bg-[#58a66c]"></div>
          <div className="h-full w-full bg-[#448563]"></div>
          <div className="h-full w-full bg-[#58a66c]"></div>
          <div className="h-full w-full bg-[#448563]"></div>
        </div>
      </div>
    </div>
  )
}

export default Card
