import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Bell, Sparkles, BookOpen, Clock, User, Lightbulb, ChevronRight, Menu, Home, FileText, Settings } from "lucide-react";
import LessonProgress from "./LessonProgress";
const LessonProgressCard: React.FC<{ lesson: LessonProgress }> = ({ lesson }) => (
    <Card className={`bg-[#1E1E1E] border border-[#333333] mb-4`}>
        <CardContent className="p-4 sm:p-6 flex justify-between items-center">
            <div className="">
                <p className="text-sm text-gray-400 mb-1">Your progress</p>
                <div className=" space-x-2 mb-2">
                    <h4 className="text-xl font-bold text-white">{lesson.progressPercent}% to complete</h4>
                    <Progress value={lesson.progressPercent} className="w-full h-4 bg-[#444] [&>div]:bg-[#34D399] mt-3" />
                </div>
                <CardTitle className="text-2xl font-semibold text-white">{lesson.title}</CardTitle>
                <CardDescription className="text-gray-400 mt-1 flex items-center space-x-4">
                    <div className="flex items-center">
                        <User className="h-3 w-3 mr-1 text-[#FF6B6B]" /> By {lesson.author}
                    </div>
                    <Separator orientation="vertical" className="h-4 bg-gray-600" />
                    <div className="flex items-center">
                        <BookOpen className="h-3 w-3 mr-1" /> {lesson.lessons} Lessons
                    </div>
                    <Separator orientation="vertical" className="h-4 bg-gray-600 hidden sm:block" />
                    <div className="flex items-center hidden sm:block">
                        <Clock className="h-3 w-3 mr-1" /> {lesson.duration}
                    </div>
                </CardDescription>
            </div>
            <ChevronRight className="h-6 w-6 text-[#FF6B6B] cursor-pointer ml-4" />
        </CardContent>
    </Card>
);

export default LessonProgressCard;
