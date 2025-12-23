"use client"

interface Answer {
    questionId: number
    answer: string | null
    marked: boolean
}

interface QuestionPaletteProps {
    totalQuestions: number
    currentQuestion: number
    answers: Answer[]
    onQuestionSelect: (index: number) => void
    answeredCount: number
    markedCount: number
}

export default function QuestionPalette({
    totalQuestions,
    currentQuestion,
    answers,
    onQuestionSelect,
    answeredCount,
    markedCount,
}: QuestionPaletteProps) {
    return (
        <div className=" rounded-lg border border-border p-6 shadow-lg sticky top-6">
            <h3 className="text-lg font-bold mb-4 text-white">Question Palette</h3>

            {/* Status Indicators */}
            <div className="grid grid-cols-3 gap-3 mb-6 text-sm">
                <div className="bg-secondary/50 rounded p-3 text-center">
                    <div className="text-accent font-bold text-lg">{answeredCount}</div>
                    <div className="text-muted-foreground text-xs">Answered</div>
                </div>
                <div className="bg-destructive/20 rounded p-3 text-center">
                    <div className="text-destructive font-bold text-lg">{totalQuestions - answeredCount - markedCount}</div>
                    <div className="text-muted-foreground text-xs">Not Answered</div>
                </div>
                <div className="bg-amber-500/20 rounded p-3 text-center">
                    <div className="text-amber-400 font-bold text-lg">{markedCount}</div>
                    <div className="text-muted-foreground text-xs">Marked</div>
                </div>
            </div>

            {/* Question Grid */}
            <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: totalQuestions }).map((_, index) => {
                    const answer = answers[index]
                    const isAnswered = answer.answer !== null
                    const isCurrent = index === currentQuestion
                    const isMarked = answer.marked

                    let bgColor = "bg-secondary/50"
                    let textColor = "text-muted-foreground"
                    let borderColor = "border-border"

                    if (isMarked) {
                        bgColor = "bg-amber-500/30"
                        textColor = "text-amber-400"
                        borderColor = "border-amber-500"
                    } else if (isAnswered) {
                        bgColor = "bg-accent/30"
                        textColor = "text-accent"
                        borderColor = "border-accent"
                    }

                    if (isCurrent) {
                        bgColor = "bg-primary"
                        textColor = "text-foreground"
                        borderColor = "border-primary"
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => onQuestionSelect(index)}
                            className={`aspect-square flex items-center justify-center rounded-md font-bold border-2 transition-all hover:scale-105 ${bgColor} ${textColor} ${borderColor}`}
                        >
                            {index + 1}
                        </button>
                    )
                })}
            </div>

            {/* Submit Button */}
            <button className="w-full mt-6 py-3 bg-destructive text-white rounded-lg font-bold hover:bg-destructive/90 transition-all">
                Submit Test
            </button>
        </div>
    )
}
