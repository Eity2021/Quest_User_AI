
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const QuestAdvisorCard: React.FC = () => {
    return (
        <section>
            <Card className={`mx-4 sm:mx-8 bg-transparent border border-[#333333]`}>
                <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-semibold text-white">Hi, I'm Quest</h3>
                            <p className="text-gray-400 mt-2">Ask me to find the right financial product or connect with a moto advisor.</p>
                        </div>
                        <Sparkles className="h-6 w-6 text-[#FF8E53] ml-4" />
                    </div>
                    <Button
                        variant="default"
                        className="mt-6 w-full sm:w-auto bg-[#FF6B6B] hover:bg-[#FF8E53] text-white font-semibold"
                    >
                        Ask me anything
                    </Button>
                </CardContent>
            </Card>
        </section>
    );
};

export default QuestAdvisorCard;
