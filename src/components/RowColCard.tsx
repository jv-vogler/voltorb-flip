import React from 'react'
import localFont from 'next/font/local'
import Image from 'next/image'
import voltorb from '../../public/images/voltorb.png'
import { COLORS } from '@/utils/constants'

const numberFont = localFont({ src: '../../public/fonts/m5x7.ttf' })

type Props = {
  coins: number
  voltorbs: number
  index: number
}

const RowColCard = ({ coins, voltorbs, index }: Props) => {
  return (
    <div
      className={`${numberFont.className} box-content flex h-11 w-11 select-none flex-col rounded-sm outline outline-4 outline-gray-200`}
    >
      <div
        className={`relative flex h-full w-full flex-col place-content-center place-items-center text-3xl font-bold text-gray-800`}
        style={{ backgroundColor: COLORS[index] }}
      >
        <div className="absolute top-[-11px] right-[-3px] text-end tracking-widest">
          {coins.toString().padStart(2, '0')}
        </div>
        <div className="absolute top-[20px] z-10 w-full outline outline-2 outline-gray-200"></div>
        <div className="absolute bottom-[-6px] flex gap-0.5">
          <Image src={voltorb} alt="voltorb" className="object-contain" />
          <p className="translate-x-0.5">{voltorbs}</p>
        </div>
      </div>
    </div>
  )
}

export default RowColCard
