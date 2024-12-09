import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface VerseCardProps {
  reference: string
  text: string
  explanation: string
}

export default function VerseCard({ reference, text, explanation }: VerseCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-blue-700">{reference}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <blockquote className="italic text-gray-700 mb-4">"{text}"</blockquote>
        <p className="text-sm text-gray-600">{explanation}</p>
      </CardContent>
    </Card>
  )
}

