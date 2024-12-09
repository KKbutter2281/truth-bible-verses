import VerseCard from '../components/VerseCard'
import { verses } from '../data/verses'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Biblical Truths</h1>
        <p className="text-xl text-blue-600">Exploring the Power of Truth in Scripture</p>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verses.map((verse, index) => (
            <VerseCard key={index} {...verse} />
          ))}
        </div>
      </main>
      <footer className="text-center py-8 text-blue-600">
        © 2023 Biblical Truths. All rights reserved.
      </footer>
    </div>
  )
}


