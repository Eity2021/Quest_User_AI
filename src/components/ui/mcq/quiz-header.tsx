interface QuizHeaderProps {
    currentQuestion: number
    totalQuestions: number
    timeLeft: string
}

export default function QuizHeader({ currentQuestion, totalQuestions, timeLeft }: QuizHeaderProps) {
    return (
        <div className=" border-b border-border">
            <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-white">
                        Q{currentQuestion} of {totalQuestions}
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-white font-mono font-bold text-lg">
                        <span className="text-2xl">⏱️</span>
                        {timeLeft}
                    </div>
                    <button className="p-2 hover:bg-secondary rounded-md transition text-white">
                        <span className="text-xl">≡</span>
                    </button>
                    <button className="p-2 hover:bg-secondary rounded-md transition text-white">
                        <span className="text-xl">✕</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
