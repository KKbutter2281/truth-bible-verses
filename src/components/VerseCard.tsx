import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface VerseCardProps {
  reference: string
  text: string
  meaning: string
  application: string
}

export default function VerseCard({ reference, text, meaning, application }: VerseCardProps) {
  const [showApplication, setShowApplication] = useState(false)

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-purple-600">{reference}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <blockquote className="italic text-gray-700 mb-4">"{text}"</blockquote>
          <h3 className="font-semibold text-blue-600 mb-2">What it means:</h3>
          <p className="text-gray-600 mb-4">{meaning}</p>
        </div>
        {showApplication ? (
          <div>
            <h3 className="font-semibold text-green-600 mb-2">How to apply it:</h3>
            <p className="text-gray-600 mb-4">{application}</p>
            <Button variant="outline" onClick={() => setShowApplication(false)}>Hide Application</Button>
          </div>
        ) : (
          <Button onClick={() => setShowApplication(true)}>Show Application</Button>
        )}
      </CardContent>
    </Card>
  )
}

