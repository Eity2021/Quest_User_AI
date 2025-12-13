import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Bell, Sparkles, BookOpen, Clock, User, CheckCircle, Lightbulb, ChevronRight, Menu, Home, FileText, Settings } from "lucide-react";
const QuickActions: React.FC = () => {
    return (
        <section>
            <div className="mx-4 sm:mx-8 mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
                    <Button variant="link" className="text-[#FF6B6B] p-0 h-auto">See More</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <Card className={` bg-[#2A2A2A]`}>
                        <CardContent className={` flex flex-col justify-between h-full`}>
                            <div className="flex items-center text-[#FFD700]">
                                <BookOpen className="h-5 w-5 mr-2" />
                                <CardTitle className="text-lg font-semibold">Daily Quiz</CardTitle>
                            </div>
                            <CardDescription className="text-gray-400 mt-2 line-clamp-2">Lorem ipsum dolor sit amet, consectetur.</CardDescription>
                            <Button
                                className="mt-4 w-full bg-[#3B3B3B] hover:bg-[#4B4B4B] text-white font-semibold border-2 border-gray-600"
                            >
                                Participate
                            </Button>
                        </CardContent>
                    </Card>


                    <div>
                        <Card className={` bg-[#2A2A2A] mb-4`}>
                            <CardContent className={`flex flex-col justify-between h-full`}>
                                <div className="flex items-center text-[#34D399]">
                                    <CheckCircle className="h-5 w-5 mr-2" />
                                    <CardTitle className="text-lg font-semibold">Practice MCQ</CardTitle>
                                </div>
                                <CardDescription className="text-gray-400 mt-2 line-clamp-2">Lorem ipsum dolor sit amet, consectetur.</CardDescription>

                            </CardContent>
                        </Card>


                        <Card className={` bg-[#2A2A2A]`}>
                            <CardContent className={`flex flex-col justify-between h-full`}>
                                <div className="flex items-center text-[#FF6B6B]">
                                    <User className="h-5 w-5 mr-2" />
                                    <CardTitle className="text-lg font-semibold">Find Tutor</CardTitle>
                                </div>
                                <CardDescription className="text-gray-400 mt-2 line-clamp-2">Lorem ipsum dolor sit amet, consectetur.</CardDescription>

                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default QuickActions;

