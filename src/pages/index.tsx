import { useEffect, useState } from 'react'
import Head from 'next/head'
import localFont from 'next/font/local'
import VoltorbFlip from '@/game/VoltorbFlip'
import GameInfo from '@/components/GameInfo'
import Scoreboard from '@/components/Scoreboard'
import Gameboard from '@/components/Gameboard'

const pokemonFont = localFont({ src: '../../public/fonts/pokemon-ds-font.ttf' })

export default function Home() {
  const [game, setGame] = useState<VoltorbFlip>()

  useEffect(() => {
    setGame(new VoltorbFlip())
  }, [])

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
        className={`flex h-screen flex-col items-center bg-[#58a66c]  text-white ${pokemonFont.className}`}
      >
        <div className="flex flex-col items-center gap-2">
          <GameInfo currentLevel={game?.currentLevel || 1} />
          <Scoreboard
            currentScore={game?.currentScore || 0}
            totalScore={game?.totalScore || 0}
          />
          <Gameboard game={game} />
        </div>
      </main>
    </>
  )
}
