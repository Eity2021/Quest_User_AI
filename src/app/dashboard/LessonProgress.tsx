import { Button } from "@/components/ui/button";
import LessonProgressCard from "./LessonProgressCard";

interface LessonProgress {
    title: string;
    author: string;
    progressPercent: number;
    lessons: number;
    duration: string;
}

// --- Mock Data ---
const todayLearning: LessonProgress[] = [
    {
        title: "Quadratic Equation",
        author: "John Smith",
        progressPercent: 75,
        lessons: 48,
        duration: "2hr 45min",
    },
    {
        title: "Quadratic Equation",
        author: "John Smith",
        progressPercent: 50,
        lessons: 30,
        duration: "29min",
    },
];


const LessonProgress: React.FC = () => {
    return (
        <section>
            <div className="mx-4 sm:mx-8 mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-white">Today's Learning</h2>
                    <Button variant="link" className="text-[#FF6B6B] p-0 h-auto">See More</Button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {todayLearning.map((lesson, index) => (
                        <LessonProgressCard key={index} lesson={lesson} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LessonProgress;