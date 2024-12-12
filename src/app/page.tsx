import Link from 'next/link'
import { Button } from "@/components/ui/button"
import VerseCard from '../components/VerseCard'
import { verses } from '../data/verses'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <header className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-purple-600 mb-2">Teen Truth Trek</h1>
          <p className="text-xl text-blue-500">Navigating Life with Biblical Truths</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-purple-700 mb-4">Welcome to Biblical Truthy</h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover how ancient wisdom applies to your modern life. Explore these verses, understand their meaning, and learn how to apply them in your daily adventures.
          </p>
          <Button asChild>
            <Link href="#verses">Start Exploring</Link>
          </Button>
        </section>

        <section id="verses" className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">Verses to Guide Your Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verses.map((verse, index) => (
              <VerseCard key={index} {...verse} />
            ))}
          </div>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Your Next Steps</h2>
          <p className="text-lg text-gray-700 mb-6">
            Now that you've explored these truths, how will you apply them? Challenge yourself to live out one of these principles this week. Share your experiences with friends or in your youth group.
          </p>
        </section>
      </main>

      <footer className="bg-purple-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>I beg you for a 100% grade.</p>
          <p className="mt-2">Give it now!</p>
        </div>
      </footer>
    </div>
  )
}

