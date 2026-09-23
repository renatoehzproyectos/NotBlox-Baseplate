import GameCard from '@/components/GameCard'
import Navbar from '@/components/Navbar'
import { GameInfo } from '../types'
import gameData from '../public/gameData.json'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'NotBlox - Baseplate',
    description: 'Play the baseplate mode with your character and phone controller in your browser.',
    openGraph: {
      title: 'NotBlox - Baseplate',
      description: 'Play the baseplate mode with your character and phone controller in your browser.',
      images: ['/PreviewTestGame.webp'],
      siteName: 'NotBlox Online',
    },
  }
}

export default async function Home() {
  const games = gameData as GameInfo[]
  return (
    <div className="space-y-8 flex flex-col items-center px-4 container min-h-screen justify-center">
      <Navbar />
      <h1 className="text-3xl md:text-5xl font-bold text-center">Select Mode</h1>
      <p className="text-center text-muted-foreground max-w-md">
        Choose a mode to play. Currently only Baseplate is available.
      </p>
      <div className="grid grid-cols-1 gap-4 max-w-md w-full">
        {games.map((game, index) => (
          <div className="col-span-1" key={index}>
            <GameCard {...game} />
          </div>
        ))}
      </div>
    </div>
  )
}
