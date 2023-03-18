import React, { useState } from 'react'
import InstructionsModal from './InstructionsModal'

type Language = 'en' | 'pt-BR'

const InstructionsBtns = () => {
  const [language, setLanguage] = useState<Language>('en')
  const [modalOpen, setModalOpen] = useState(false)

  function handleClick(language: Language) {
    setLanguage(language)
    setModalOpen(true)
  }

  return (
    <>
      {modalOpen && (
        <InstructionsModal language={language} setModalOpen={setModalOpen} />
      )}
      <div className="flex w-full justify-around gap-2">
        <div
          className="flex w-11/12 cursor-pointer place-items-center rounded-5 border-4 border-gray-300 bg-white px-2 outline outline-2 outline-gray-600 hover:bg-zinc-200"
          onClick={() => {
            handleClick('pt-BR')
          }}
        >
          <div className="grow text-center text-3xl leading-7 text-gray-600 drop-shadow-soft">
            Como jogar
          </div>
        </div>
        <div
          className="flex w-11/12 cursor-pointer place-items-center rounded-5 border-4 border-gray-300 bg-white px-2 outline outline-2 outline-gray-600 hover:bg-zinc-200"
          onClick={() => {
            handleClick('en')
          }}
        >
          <div className="grow text-center text-3xl leading-7 text-gray-600 drop-shadow-soft">
            How to play
          </div>
        </div>
      </div>
    </>
  )
}

export default InstructionsBtns
