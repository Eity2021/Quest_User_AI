import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Bell, Sparkles, Menu } from "lucide-react";
interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <section className="container mx-auto">
            <div className="flex justify-between items-center py-12 px-4 sm:px-8">
                <div className="flex flex-col">

                    <button
                        className="md:hidden p-2 rounded-md hover:bg-gray-100"
                        onClick={onMenuClick}
                    >
                        <Menu size={24} color="#fff" />
                    </button>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-white bg-[#FF6B6B] rounded-full p-1 px-3">
                        <Sparkles className="h-4 w-4 fill-white" />
                        <span className="text-sm font-semibold">1,250</span>
                    </div>
                    <Bell className="h-6 w-6 text-white cursor-pointer" />
                </div>
            </div>
        </section>
    );
};

export default Header;
