import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Bell, Sparkles, BookOpen, Clock, User, Lightbulb, ChevronRight, Menu, Home, FileText, Settings } from "lucide-react";
const SscCourseCard: React.FC = () => {
    return (
        <section>

            <div className="grid grid-cols-2 gap-4">
                <Card className={`ml-8 mt-8 bg-[#1E1E1E]  border border-[#333333]`}>
                    <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <p className="text-sm font-medium text-gray-400 flex items-center mb-1">
                                <Lightbulb className="h-4 w-4 mr-1 text-[#FFD700]" /> EMICON
                            </p>
                            <CardTitle className="text-3xl font-bold text-white mt-1">SSC Course</CardTitle>
                            <CardDescription className="text-gray-400 mt-2 max-w-lg">Comprehensive coverage of the SSC syllabus</CardDescription>
                        </div>
                        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                            <span className="text-4xl font-extrabold text-white">$199</span>
                            <Button
                                className="bg-[#FF6B6B] hover:bg-[#FF8E53] text-white font-semibold px-8 py-6 text-lg"
                            >
                                Enroll Now
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <Card className={`mr-8  mt-8 bg-[#1E1E1E]  border border-[#333333]`}>
                    <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div>
                            <p className="text-sm font-medium text-gray-400 flex items-center mb-1">
                                <Lightbulb className="h-4 w-4 mr-1 text-[#FFD700]" /> EMICON
                            </p>
                            <CardTitle className="text-3xl font-bold text-white mt-1">SSC Course</CardTitle>
                            <CardDescription className="text-gray-400 mt-2 max-w-lg">Comprehensive coverage of the SSC syllabus</CardDescription>
                        </div>
                        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                            <span className="text-4xl font-extrabold text-white">$199</span>
                            <Button
                                className="bg-[#FF6B6B] hover:bg-[#FF8E53] text-white font-semibold px-8 py-6 text-lg"
                            >
                                Enroll Now
                            </Button>
                        </div>
                    </CardContent>
                </Card>

            </div>


            {/* Pagination Dots placeholder for web/larger screen */}
            <div className="flex justify-center space-x-2 my-6">
                <div className="h-2 w-2 rounded-full bg-[#FF6B6B]"></div>
                <div className="h-2 w-2 rounded-full bg-gray-700"></div>
                <div className="h-2 w-2 rounded-full bg-gray-700"></div>
            </div>
        </section>
    );
};

export default SscCourseCard;