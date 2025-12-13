import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Bell, Sparkles, BookOpen, Clock, User, Lightbulb, ChevronRight, Menu, Home, FileText, Settings } from "lucide-react";
const BecomeATutorCard: React.FC = () => {
    return (
        <section>
            <Card className={`mx-4 sm:mx-8 mt-8  bg-[#1E1E1E] border border-[#333333] relative overflow-hidden`}>
                {/* Decorative element like in the mobile design */}
                <div className="absolute top-4 right-4 text-[#34D399]">
                    <Sparkles className="h-6 w-6" />
                </div>
                <CardContent className="p-6">
                    <CardTitle className="text-2xl font-bold text-white">Become A Tutor</CardTitle>
                    <CardDescription className="text-gray-400 mt-2">Share Your Knowledge & Earn Rewards</CardDescription>
                    <Button
                        className="mt-4 w-full sm:w-auto bg-[#FF6B6B] hover:bg-[#FF8E53] text-white font-semibold"
                    >
                        Apply
                    </Button>
                </CardContent>
            </Card>
        </section>
    );
};

export default BecomeATutorCard;
