import { useEffect, useState } from 'react'
import Head from 'next/head'
import VoltorbFlip from '@/game/VoltorbFlip'

export default function Home() {
  const [game, setGame] = useState<VoltorbFlip>()

  useEffect(() => {
    const newGame = new VoltorbFlip()
    setGame(newGame)
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
      <main>
        <h1>Voltorb Flip</h1>
        <p>Status: {game?.gameStatus}</p>
        <p>Current level: {game?.currentLevel}</p>
      </main>
    </>
  )
}
