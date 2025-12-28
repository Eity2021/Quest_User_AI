"use client";
import visual from "@/assets/images/questionVisual.png";
import Image from "next/image";
interface QuizQuestionProps {
  questionNumber: number;
  onAnswerSelect: (answer: string) => void;
  selectedAnswer: string | null;
  onMarkForReview: () => void;
  isMarked: boolean;
  onNavigate: (direction: "prev" | "next") => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

const questions = [
  {
    id: 1,
    question: "What is the capital of Bangladesh?",
    image: visual,
    options: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi"],
    correctAnswer: "Dhaka",
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
    correctAnswer: "Jupiter",
  },
  {
    id: 3,
    question: "What is the chemical symbol for Gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: "Au",
  },
  {
    id: 4,
    question: "Which country is home to the kangaroo?",
    options: ["Brazil", "New Zealand", "Australia", "South Africa"],
    correctAnswer: "Australia",
  },
  {
    id: 5,
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2",
  },
  {
    id: 6,
    question: "Which ocean is the largest?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    id: 7,
    question: "What is the capital of France?",
    options: ["Lyon", "Paris", "Marseille", "Nice"],
    correctAnswer: "Paris",
  },
  {
    id: 8,
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    id: 9,
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Denali", "Mount Everest", "Kilimanjaro"],
    correctAnswer: "Mount Everest",
  },
  {
    id: 10,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    id: 11,
    question: "What is the currency of Japan?",
    options: ["Won", "Yuan", "Yen", "Baht"],
    correctAnswer: "Yen",
  },
  {
    id: 12,
    question: "How many sides does a hexagon have?",
    options: ["4", "5", "6", "7"],
    correctAnswer: "6",
  },
  {
    id: 13,
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
    correctAnswer: "300,000 km/s",
  },
  {
    id: 14,
    question: 'Which element is represented by the symbol "O"?',
    options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
    correctAnswer: "Oxygen",
  },
  {
    id: 15,
    question: "What is the capital of Italy?",
    options: ["Milan", "Rome", "Venice", "Florence"],
    correctAnswer: "Rome",
  },
  {
    id: 16,
    question: "How many legs does a spider have?",
    options: ["6", "8", "10", "12"],
    correctAnswer: "8",
  },
  {
    id: 17,
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "Liechtenstein", "Malta"],
    correctAnswer: "Vatican City",
  },
  {
    id: 18,
    question: "Which river is the longest in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
  },
  {
    id: 19,
    question: "What is the capital of Spain?",
    options: ["Barcelona", "Madrid", "Valencia", "Seville"],
    correctAnswer: "Madrid",
  },
  {
    id: 20,
    question: "How many bones are in the human body?",
    options: ["186", "206", "226", "246"],
    correctAnswer: "206",
  },
];

export default function QuizQuestion({
  questionNumber,
  onAnswerSelect,
  selectedAnswer,
  onMarkForReview,
  isMarked,
  onNavigate,
  canGoPrev,
  canGoNext,
}: QuizQuestionProps) {
  const question = questions[questionNumber - 1];

  return (
    <div className="space-y-6 ">
      {/* Question Card */}
      <div className=" rounded-lg  overflow-hidden shadow-lg">
        {question.image && (
          <Image
            src={question.image}
            alt="Question visual"
            className="w-full"
          />
        )}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-white">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => onAnswerSelect(option)}
                className={`w-full p-4 text-left border-2 rounded-lg transition-all font-medium ${
                  selectedAnswer === option
                    ? "border-accent bg-accent/10 text-white"
                    : "border-border bg-secondary/30 text-white hover:border-accent/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Mark for Review */}
          <button
            onClick={onMarkForReview}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isMarked
                ? "bg-destructive text-white"
                : "bg-secondary text-foreground hover:bg-secondary/80"
            }`}
          >
            <span className={isMarked ? "★" : "☆"}></span>
            Mark For Review
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          onClick={() => onNavigate("prev")}
          disabled={!canGoPrev}
          className={`flex-1 py-3 rounded-lg font-bold transition-all ${
            canGoPrev
              ? "bg-secondary text-foreground hover:bg-secondary/80"
              : "bg-secondary/30 text-muted-foreground cursor-not-allowed"
          }`}
        >
          ← Previous
        </button>
        <button
          onClick={() => onNavigate("next")}
          disabled={!canGoNext}
          className={`flex-1 py-3 rounded-lg font-bold text-white transition-all ${
            canGoNext
              ? "bg-accent hover:bg-accent/80"
              : "bg-accent/50 cursor-not-allowed"
          }`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
