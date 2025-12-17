import { BookOpen, Clock, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recommendedTests = [
  {
    id: 1,
    title: "Physics Chapter 1: Motion in a Straight Line",
    difficulty: "Easy",
    questions: 25,
    duration: 30,
    bestScore: 85,
    color: "bg-emerald-500/20 text-emerald-400",
  },
  {
    id: 2,
    title: "Physics Chapter 1: Motion in a Straight Line",
    difficulty: "Medium",
    questions: 25,
    duration: 30,
    bestScore: 85,
    color: "bg-amber-500/20 text-amber-400",
  },
  {
    id: 3,
    title: "Chemistry Chapter 2: Atomic Structure",
    difficulty: "Hard",
    questions: 30,
    duration: 45,
    bestScore: 72,
    color: "bg-red-500/20 text-red-400",
  },
  {
    id: 4,
    title: "Mathematics Chapter 3: Calculus Basics",
    difficulty: "Easy",
    questions: 20,
    duration: 25,
    bestScore: 88,
    color: "bg-emerald-500/20 text-emerald-400",
  },
]

function getDifficultyBadgeColor(difficulty: string) {
  switch (difficulty) {
    case "Easy":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
    case "Medium":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30"
    case "Hard":
      return "bg-red-500/20 text-red-400 border-red-500/30"
    default:
      return "bg-slate-500/20 text-slate-400 border-slate-500/30"
  }
}

export default function RecommendedTests() {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-white">Recommended Tests</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {recommendedTests.map((test) => (
          <Card
            key={test.id}
            className="group cursor-pointer border border-border bg-transparent p-6 transition-all hover:shadow-lg">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex-1">
                <h3 className=" line-clamp-2 text-lg font-semibold text-white">{test.title}</h3>
              </div>
              <Badge className={getDifficultyBadgeColor(test.difficulty)}>{test.difficulty}</Badge>
            </div>

            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{test.questions} Questions</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{test.duration} Min</span>
              </div>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Best Score</p>
                <p className="text-lg font-semibold text-red-400">{test.bestScore}%</p>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
