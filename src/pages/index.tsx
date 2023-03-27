import Head from 'next/head'
import localFont from 'next/font/local'
import GameInfo from '@/components/GameInfo'
import Scoreboard from '@/components/Scoreboard'
import Gameboard from '@/components/Gameboard'
import useGame from '@/hooks/useGame'
import InstructionsBtns from '@/components/InstructionsBtns'
import Footer from '@/components/Footer'
import { useState } from 'react'
import Settings from '@/components/Settings'

const pokemonFont = localFont({ src: '../../public/fonts/pokemon-ds-font.ttf' })

export default function Home() {
  const { game, updateGame } = useGame()
  const [waitForClick, setWaitForClick] = useState(false)

  return (
    <>
      <Head>
        <title>Voltorb Flip</title>
        <meta
          name="description"
          content="Uma recriação do minigame Voltorb Flip de Pokémon HeartGold e SoulSilver usando Typescript e Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex h-screen flex-col items-center text-white ${pokemonFont.className}`}
      >
        <div className="flex flex-col items-center gap-2 p-2">
          <InstructionsBtns />
          {game && (
            <>
              <GameInfo currentLevel={game.currentLevel} />
              <Scoreboard
                currentScore={game.currentScore}
                totalScore={game.totalScore}
              />
              <Gameboard
                game={game}
                updateGame={updateGame}
                waitForClick={waitForClick}
              />
              <Settings
                waitForClick={waitForClick}
                setWaitForClick={setWaitForClick}
              />
              <Footer />
            </>
          )}
        </div>
      </main>
    </>
  )
}
