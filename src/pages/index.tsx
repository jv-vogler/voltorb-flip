import { useState } from 'react'
import Head from 'next/head'
import localFont from 'next/font/local'
import VoltorbFlip from '@/game/VoltorbFlip'
import GameInfo from '@/components/GameInfo'
import Scoreboard from '@/components/Scoreboard'
import Gameboard from '@/components/Gameboard'

const pokemonFont = localFont({ src: '../../public/fonts/pokemon-ds-font.ttf' })

export default function Home() {
  const [game] = useState<VoltorbFlip>(new VoltorbFlip())

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
        className={`flex h-screen flex-col items-center border-2 border-red-500 bg-[#58a66c]  text-white ${pokemonFont.className}`}
      >
        <div className="flex flex-col items-center gap-2 border-4 border-blue-500">
          <GameInfo currentLevel={game.currentLevel} />
          <Scoreboard
            currentScore={game.currentScore}
            totalScore={game.totalScore}
          />
          <Gameboard game={game} />
        </div>
      </main>
    </>
  )
}
