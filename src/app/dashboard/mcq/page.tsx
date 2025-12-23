"use client"

import { useState, useEffect } from "react"
import QuestionPalette from "@/components/ui/mcq/question-palette"
import QuizHeader from "@/components/ui/mcq/quiz-header"
import QuizQuestion from "@/components/ui/mcq/quiz-question"

interface Answer {
    questionId: number
    answer: string | null
    marked: boolean
}

const TOTAL_QUESTIONS = 20

export default function QuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Answer[]>(
        Array.from({ length: TOTAL_QUESTIONS }, (_, i) => ({
            questionId: i,
            answer: null,
            marked: false,
        })),
    )
    const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const handleAnswerSelect = (answer: string) => {
        const newAnswers = [...answers]
        newAnswers[currentQuestion].answer = answer
        setAnswers(newAnswers)
    }

    const handleMarkForReview = () => {
        const newAnswers = [...answers]
        newAnswers[currentQuestion].marked = !newAnswers[currentQuestion].marked
        setAnswers(newAnswers)
    }

    const handleNavigate = (direction: "prev" | "next") => {
        if (direction === "prev" && currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        } else if (direction === "next" && currentQuestion < TOTAL_QUESTIONS - 1) {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    const handleQuestionSelect = (index: number) => {
        setCurrentQuestion(index)
    }

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
    }

    const answeredCount = answers.filter((a) => a.answer !== null).length
    const markedCount = answers.filter((a) => a.marked).length

    return (
        <div className="min-h-screen bg-transparent relative">
            <div className="absolute -top-10 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-70 -z-10"></div>
            <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-80 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[200px] opacity-70 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[200px] opacity-70 -z-10"></div>
            <QuizHeader
                currentQuestion={currentQuestion + 1}
                totalQuestions={TOTAL_QUESTIONS}
                timeLeft={formatTime(timeLeft)}
            />

            <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6 container mx-auto">
                {/* Main Quiz Area */}
                <div className="flex-1">
                    <QuizQuestion
                        questionNumber={currentQuestion + 1}
                        onAnswerSelect={handleAnswerSelect}
                        selectedAnswer={answers[currentQuestion].answer}
                        onMarkForReview={handleMarkForReview}
                        isMarked={answers[currentQuestion].marked}
                        onNavigate={handleNavigate}
                        canGoPrev={currentQuestion > 0}
                        canGoNext={currentQuestion < TOTAL_QUESTIONS - 1}
                    />
                </div>

                {/* Question Palette */}
                <div className="w-full lg:w-80">
                    <QuestionPalette
                        totalQuestions={TOTAL_QUESTIONS}
                        currentQuestion={currentQuestion}
                        answers={answers}
                        onQuestionSelect={handleQuestionSelect}
                        answeredCount={answeredCount}
                        markedCount={markedCount}
                    />
                </div>
            </div>
        </div>
    )
}
