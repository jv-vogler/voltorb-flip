import React, { useEffect } from 'react'

type Translations = {
  howToPlayTitle: string
  instructions: string[]
  tipsTitle: string
  tips: string[]
}

const translations: Record<'en' | 'pt-BR', Translations> = {
  en: {
    howToPlayTitle: 'How to play:',
    instructions: [
      'Click on the cards to reveal them.',
      'The colored cards show how many Coins and Voltorbs are there per row or column.',
      'The goal is to find all the x2 and x3 Coins on each Level while avoiding Voltorbs.',
      'Have fun!',
    ],
    tipsTitle: 'Tips:',
    tips: [
      'Avoid the rows and columns you know that can only have either a x1 Coin or a Voltorb.',
      'Reveal the rows and columns with 0 Voltorbs first.',
    ],
  },
  'pt-BR': {
    howToPlayTitle: 'Como jogar:',
    instructions: [
      'Clique nos cards para revelá-los.',
      'Os cards coloridos mostram quantas Moedas e Voltorbs existem em cada linha e coluna.',
      'O objetivo é achar todas as Moedas x2 e x3 em cada Level, evitando achar os Voltorbs.',
      'Divirta-se!',
    ],
    tipsTitle: 'Dicas:',
    tips: [
      'Evite linhas e colunas que podem ter apenas uma Moeda x1 ou um Voltorb.',
      'Revele todas as linhas e colunas com 0 Voltorbs primeiro.',
    ],
  },
}

type Props = {
  language: 'en' | 'pt-BR'
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const InstructionsModal = ({ language, setModalOpen }: Props) => {
  const { howToPlayTitle, instructions, tipsTitle, tips } =
    translations[language]

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setModalOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setModalOpen])

  return (
    <>
      <div
        className="fixed z-50 h-full w-screen -translate-y-2 bg-black opacity-50 "
        onClick={() => setModalOpen(false)}
      />
      <div
        onClick={() => setModalOpen(false)}
        className="fixed z-50 cursor-default rounded-5 border-4 border-gray-300 bg-white outline outline-2 outline-gray-600"
      >
        <div className="flex flex-col gap-8 p-6 pt-3 text-gray-800 drop-shadow-soft">
          <div>
            <h1 className="text-4xl text-gray-700">{howToPlayTitle}</h1>
            <ul className="flex list-disc flex-col gap-4 pl-8 pr-2 pt-2 text-2xl leading-6">
              <li>{instructions[0]}</li>
              <li>{instructions[1]}</li>
              <li>{instructions[2]}</li>
              <li>{instructions[3]}</li>
            </ul>
          </div>
          <div>
            <h1 className="text-4xl text-gray-700">{tipsTitle}</h1>
            <ul className="flex list-disc flex-col gap-4 pl-8 pr-2 text-2xl leading-6">
              <li>{tips[0]}</li>
              <li>{tips[1]}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default InstructionsModal
